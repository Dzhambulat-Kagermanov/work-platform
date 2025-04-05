"use client"
import { FC } from "react"
import { TClassName, TProductItemProps, TSalesmanInfo } from "@/types"
import { cn } from "@/lib"
import { Typography } from "@/components/ui"
import Link from "next/link"
import Image from "next/image"
import cls from "./index.module.scss"

interface Props extends TClassName, Pick<TProductItemProps, "salesmanId"> {
    shopName: string
    rating: string
}
const ContentShop: FC<Props> = ({
    salesmanId,
    className,
    shopName,
    rating,
}) => {
    return (
        <div className={cn(cls.wrapper, [className])}>
            <Typography font="Inter-SB" size={16} tag="h6">
                {shopName}
            </Typography>
            <div className={cn(cls.content)}>
                <Link href="/buyer/salesman/1" className={cn(cls.link)}>
                    <Typography font="Inter-R" size={16}>
                        Подробнее
                    </Typography>
                </Link>
                <div className={cn(cls.rating)}>
                    <Image
                        src={"/images/shared/rating/star-v2.svg"}
                        alt="Рейтинг"
                        width={15}
                        height={15}
                    />
                    <Typography font="Inter-R" size={16}>
                        {rating}
                    </Typography>
                </div>
            </div>
        </div>
    )
}

export { ContentShop }
