"use client";
import { FC, useEffect, useRef, useCallback } from "react";
import { TClassName } from "@/types";
import { cn } from "@/lib";
import { ProductItem } from "@/components/entities/ProductItem";
import Link from "next/link";
import cls from "./index.module.scss";
import { ROUTES } from "@/constants";
import { useProductsListQuery } from "@/hooks/api/products";
import { PageErrorStub } from "@/components/ui/page-error-stub";
import { PageLoader } from "@/components/ui/loaders";
import Product from "@/types/api/Product";

interface Props extends TClassName {}
const Products: FC<Props> = ({ className }) => {
    const { 
        data: productsData, 
        isLoading, 
        fetchNextPage, 
        hasNextPage, 
        isFetchingNextPage 
    } = useProductsListQuery();
    
    const loadMoreRef = useRef<HTMLDivElement>(null);
    
    // Отладочная информация
    useEffect(() => {
        if (productsData?.pages) {
            console.log('API Products Data:', { 
                pages: productsData.pages.length,
                totalReported: productsData.pages[0]?.total,
                itemsPerPage: productsData.pages.map(page => page?.data?.length || 0),
                hasNextPage
            });
        }
    }, [productsData, hasNextPage]);
    
    // Функция для загрузки следующей страницы при скролле
    const loadMoreItems = useCallback(() => {
        if (hasNextPage && !isFetchingNextPage) {
            console.log('Loading next page of products...');
            fetchNextPage();
        }
    }, [fetchNextPage, hasNextPage, isFetchingNextPage]);
    
    // Обработчик для Intersection Observer
    const handleObserver = useCallback((entries: IntersectionObserverEntry[]) => {
        const [target] = entries;
        if (target.isIntersecting && hasNextPage) {
            loadMoreItems();
        }
    }, [loadMoreItems, hasNextPage]);
    
    // Настраиваем Intersection Observer
    useEffect(() => {
        const observer = new IntersectionObserver(handleObserver, {
            rootMargin: '300px',
            threshold: 0.1
        });
        
        const currentRef = loadMoreRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }
        
        return () => {
            if (currentRef) {
                observer.disconnect();
            }
        };
    }, [handleObserver]);
    
    // Добавляем обработчик скролла как дополнительный метод загрузки
    useEffect(() => {
        const handleScroll = () => {
            if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 500) {
                loadMoreItems();
            }
        };
        
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [loadMoreItems]);

    if (isLoading) {
        return <PageLoader />;
    }

    if (!productsData || !productsData.pages?.[0]?.data?.length) {
        return <PageErrorStub text="Товары не найдены" />;
    }

    // Получаем все загруженные товары из всех страниц
    const allLoadedProducts = productsData.pages.flatMap(page => page?.data || []);

    return (
        <>
            <ul className={cn(cls.wrapper, [className])}>
                {allLoadedProducts.map((item: Product, index: number) => {
                    return (
                        <Link
                            href={ROUTES.BUYER.PRODUCTS.ID(item.id.toString())}
                            key={`product-${item.id}-${index}`}
                        >
                            <ProductItem
                                id={item.id}
                                headCls={cn(cls.product_head)}
                                name={item.product.name}
                                tooltip={""}
                                quantities={0}
                                image={
                                    item.product.images &&
                                    item.product.images.length
                                        ? item.product.images[0]
                                        : ""
                                }
                                price={{
                                    price: Number(item.price_without_cashback),
                                    discount: Number(item.product.discount),
                                }}
                            />
                        </Link>
                    );
                })}
            </ul>
            
            {/* Индикатор загрузки следующей страницы */}
            <div ref={loadMoreRef} className={cls.loader_container}>
                {isFetchingNextPage && <PageLoader />}
                {!isFetchingNextPage && hasNextPage && (
                    <div style={{ height: '30px', width: '100%' }}>Прокрутите вниз, чтобы загрузить ещё товары</div>
                )}
                {!hasNextPage && allLoadedProducts.length > 0 && (
                    <div style={{ height: '30px', width: '100%' }}>Больше товаров нет</div>
                )}
            </div>
        </>
    );
};

export { Products };
