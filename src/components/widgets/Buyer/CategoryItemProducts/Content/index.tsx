import { FC } from "react"
import { TClassName } from "@/types"
import { cn } from "@/lib"
import { ProductItem } from "@/components/entities/ProductItem"
import Link from "next/link"
import cls from "./index.module.scss"
import { ROUTES } from "@/constants"
import { useProductsListByCategoryQuery } from "@/hooks/api/products"
import { PageLoader } from "@/components/ui/loaders"
import { PageErrorStub } from "@/components/ui/page-error-stub"

interface Props
    extends TClassName,
    Record<"categoryId" | "subcategory", string | undefined> { }
const Content: FC<Props> = ({ className, categoryId, subcategory }) => {
    const { data: products, isLoading } = useProductsListByCategoryQuery({
        categoryId,
        subcategory,
    })

    if (isLoading) {
        return <PageLoader />
    }

    if (!products || !products.data.length) {
        return <PageErrorStub text="Товары не найдены" />
    }

    return (
        <ul className={cn(cls.group, [className])}>
            {products.data.map((item, index) => {
                return (
                    <Link
                        href={ROUTES.BUYER.PRODUCTS.ID(item.id.toString())}
                        key={index}
                    >
                        <ProductItem
                            id={item.id}
                            headCls={cn(cls.product_head)}
                            name={item.product.name}
                            tooltip={""}
                            quantities={0}
                            image={""}
                            price={{
                                //@ts-expect-error: Исправить потом
                                price: Number(item.price_with_cashback),
                                discount: Number(item.product.discount),
                            }}
                        />
                    </Link>
                )
            })}
        </ul>
    )
}

export { Content }
