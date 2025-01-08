import { FC } from "react";
import { TModuleClassName } from "@/types";
import { cn } from "@/lib";
import { Container } from "@/components/ui";
import { Content } from "./Content";
import { Switcher } from "./Switcher";
import { SimilarProducts } from "./SimilarProducts";
import { GalleryAdaptive } from "./GalleryAdaptive";
import cls from "./index.module.scss";
import Product from "@/types/api/Product";

interface Props extends TModuleClassName {
    product: Product;
}
const ProductCardInfo: FC<Props> = ({
    className,
    wrapperClassName,
    product,
}) => {
    return (
        <div className={cn(cls.wrapper, [wrapperClassName])}>
            <Container className={cn(cls.container, [className])}>
                <div className={cn(cls.head)}>
                    <GalleryAdaptive
                        images={product.product.images ?? []}
                        isFavorite={false}
                    />
                    <Content
                        product={product}
                        className={cn(cls.content)}
                        // data={{
                        //     name: product.name,
                        //     price: {
                        //         price: product.price_without_cashback,
                        //         discount: Number(product.price_with_cashback),
                        //     },
                        //     salesmanId: product.user_id,
                        //     tooltip: "asda",
                        //     id: product.id,
                        //     isFavorite: false,
                        // }}
                    />
                </div>
                <Switcher
                    salesmanId={product.user_id}
                    id={product.id}
                    product={product}
                    productDescription={product.product.description}
                    className={cn(cls.switcher)}
                />
                <SimilarProducts
                    id={product.id}
                    className={cn(cls.similar_products)}
                />
            </Container>
        </div>
    );
};

export { ProductCardInfo };
