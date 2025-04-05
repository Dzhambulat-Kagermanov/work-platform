import { useQuery } from "@tanstack/react-query";
import { apiService } from "@/services";
import { QueryItem } from "@/types/client";
import { useFiltersStore } from "@/store";
import {
    categoryPageFiltersSelector,
    mainPageFiltersSelector,
} from "@/store/useFiltersStore";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type ProductsListQueryArgs = {} & Record<
    "categoryId" | "subcategory",
    string | undefined
>;

const useProductsListByCategoryQuery = (data: ProductsListQueryArgs | null) => {
    const router = useRouter();
    const mainPageFilters = useFiltersStore(mainPageFiltersSelector);
    const categoryPageFilters = useFiltersStore(categoryPageFiltersSelector);

    const [queryItems, setQueryItems] = useState<QueryItem[]>([]);

    // const pathname = usePathname();

    const queryItemsHandler = () => {
        const res: QueryItem[] = [];

        if (data?.subcategory && data.subcategory !== "-1") {
            res.push({
                key: "category_id",
                value: data.subcategory,
            });
        } else if (data?.categoryId) {
            res.push({
                key: "category_id",
                value: data.categoryId,
            });
        }

        if (categoryPageFilters.cashbackFrom) {
            res.push({
                key: "cashback_from",
                value: `${categoryPageFilters.cashbackFrom}`,
            });
        }

        if (categoryPageFilters.cashbackTo) {
            res.push({
                key: "cashback_to",
                value: `${categoryPageFilters.cashbackTo}`,
            });
        }

        if (categoryPageFilters.priceFrom) {
            res.push({
                key: "price_from",
                value: `${categoryPageFilters.priceFrom}`,
            });
        }

        if (categoryPageFilters.priceTo) {
            res.push({
                key: "price_to",
                value: `${categoryPageFilters.priceTo}`,
            });
        }

        if (categoryPageFilters.sortBy) {
            switch (categoryPageFilters.sortBy) {
                case "PRICE_DESC":
                case "CASHBACK_AMOUNT":
                    res.push({
                        key: "price_with_cashback",
                        value: "desc",
                    });
                    break;
                case "POPULAR":
                    res.push({
                        key: "popular",
                        value: "desc",
                    });
                    break;
                case "PRODUCT_RATING":
                    res.push({
                        key: "rating_product",
                        value: "desc",
                    });
                    break;
                case "SELLER_RATING":
                    res.push({
                        key: "rating_seller",
                        value: "desc",
                    });
                    break;
                case "PUBLICATION_DATE":
                    res.push({
                        key: "created_at",
                        value: "desc",
                    });
                    break;
            }
        }

        // routerReplaceQueryHandler(router, pathname, res);
        setQueryItems(res);
    };

    useEffect(() => {
        queryItemsHandler();
    }, [categoryPageFilters]);

    return useQuery({
        queryKey: [
            "products-list-category",
            `products-list-category-${data?.categoryId ?? null}`,
            `products-list-category-${data?.subcategory ?? null}`,
            queryItems,
        ],
        queryFn: async () => {
            const res = await apiService.products.getProductsList(
                queryItems || [],
            );
            return res;
        },
        staleTime: 30_000,
        retry: 3,
    });
};

export default useProductsListByCategoryQuery;
