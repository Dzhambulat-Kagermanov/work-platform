"use client"
import { FC, useState } from "react"
import { TClassName, TProductItemProps } from "@/types"
import { cn } from "@/lib"
import { SwitcherActions } from "../SwitcherActions"
import { SwitcherContent } from "../SwitcherContent"
import { useScreen } from "@/hooks"
import { SM_MID } from "@/constants"
import cls from "./index.module.scss"
import Product from "@/types/api/Product"

export type TContentType = "conditions" | "description" | "reviews"

interface Props
    extends TClassName,
    Pick<TProductItemProps, "id" | "productDescription" | "salesmanId" | 'productInstructions'> {
    product: Product
}
const Switcher: FC<Props> = ({
    id,
    productDescription, productInstructions,
    className,
    salesmanId,
    product,
}) => {
    const width = useScreen()
    const [contentType, setContentType] = useState<TContentType>("conditions")

    return (
        <section className={cn(cls.wrapper, [className])}>
            {width > SM_MID && (
                <SwitcherActions
                    className={cn(cls.actions)}
                    contentType={contentType}
                    setContentType={setContentType}
                />
            )}
            <SwitcherContent
                salesmanId={salesmanId}
                contentType={contentType}
                product={product}
                productInstructions={productInstructions}
                productDescription={productDescription}
                className={cn(cls.content)}
            />
        </section>
    )
}

export { Switcher }
