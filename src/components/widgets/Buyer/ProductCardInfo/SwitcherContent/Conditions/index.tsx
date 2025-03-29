import { FC } from "react"
import cls from "./index.module.scss"
import { TClassName, TProductItemProps } from "@/types"
import { cn } from "@/lib"
import { Typography } from "@/components/ui"
import { Product } from '@/types/api'

interface Props extends TClassName, Pick<TProductItemProps, 'productInstructions'> { }
const Conditions: FC<Props> = ({ className, productInstructions }) => {
    return (
        <div className={cn(cls.wrapper, [className])}>
            <Typography font="Inter-R" size={14} tag="h4">
                {productInstructions}
            </Typography>
        </div>
    )
}

export { Conditions }
