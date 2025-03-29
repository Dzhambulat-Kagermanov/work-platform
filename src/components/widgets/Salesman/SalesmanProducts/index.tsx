import { FC } from "react"
import { TClassName } from "@/types"
import { cn } from "@/lib"
import { Typography } from "@/components/ui"
import { ProductItem } from "@/components/entities/ProductItem"
import Link from "next/link"
import cls from "./index.module.scss"
import { WbProduct } from "@/types/api/Product"

interface Props extends TClassName {
    products: WbProduct[]
}
const SalesmanProducts: FC<Props> = ({ className, products }) => {
    if (!products || !products.length) {
        return <></>
    }

    return (
        <section className={cn(cls.wrapper, [className])}>
            <Typography
                font="Inter-B"
                size={25}
                tag="h2"
                className={cn(cls.title)}
            >
                Товары продавца
            </Typography>
            <ul className={cn(cls.group)}>
                {products.map((item) => {
                    return (
                        <Link href={`/buyer/products/${item.id}`} key={item.id}>
                            <ProductItem
                                id={item.id}
                                wrapperCls={cn(cls.item)}
                                image={item.images.length ? item.images[0] : ""}
                                name={item.name}
                                price={{
                                    //@ts-expect-error: Исправить потом
                                    price: +item.price,
                                    discount: +item.discount,
                                }}
                                quantities={item.quantity_available}
                                tag="li"
                                tooltip={""}
                            />
                        </Link>
                    )
                })}
            </ul>
        </section>
    )
}

export { SalesmanProducts }
