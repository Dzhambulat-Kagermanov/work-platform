import { FC } from "react"
import { TClassName } from "@/types"
import { cn } from "@/lib"
import { Container, Typography } from "@/components/ui"
import { salesmanProducts } from "@/constants/stub"
import { ProductItem } from "@/components/entities/ProductItem"
import Link from "next/link"
import cls from "./index.module.scss"

interface Props extends TClassName { }
const SalesmanProducts: FC<Props> = ({ className }) => {
    return (
        <Container tag="section" className={cn(cls.wrapper, [className])}>
            <Typography
                font="Inter-B"
                size={25}
                tag="h2"
                className={cn(cls.title)}
            >
                Товары продавца
            </Typography>
            <ul className={cn(cls.group)}>
                {salesmanProducts.map(
                    ({
                        id,
                        previewImage,
                        name,
                        price,
                        productDescription,
                        quantities,
                        isFavorite,
                        tooltip,
                    }) => {
                        return (
                            <Link href={`/buyer/products/${id}`} key={id}>
                                <ProductItem
                                    id={id}
                                    wrapperCls={cn(cls.item)}
                                    image={previewImage}
                                    name={name}
                                    //@ts-expect-error: Исправить потом
                                    price={price}
                                    quantities={quantities}
                                    tag="li"
                                    tooltip={tooltip}
                                />
                            </Link>
                        )
                    },
                )}
            </ul>
        </Container>
    )
}

export { SalesmanProducts }
