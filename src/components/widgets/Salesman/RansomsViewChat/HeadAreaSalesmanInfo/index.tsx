"use client";
import { FC } from "react";
import { TClassName } from "@/types";
import { cn } from "@/lib";
import { Typography, DiscountPlaque } from "@/components/ui";
import { useScreen } from "@/hooks";
import { MD_LOW, XS_BIG } from "@/constants";
import cls from "./index.module.scss";

interface Props extends TClassName {}
const HeadAreaSalesmanInfo: FC<Props> = ({ className }) => {
    const width = useScreen();

    return (
        <div
            className={cn(cls.wrapper, [className], {
                [cls.isOffline]: true,
            })}
        >
            <div className={cn(cls.head)}>
                <Typography
                    font="Inter-SB"
                    size={width > MD_LOW ? 16 : width > XS_BIG ? 14 : 10}
                    tag="h2"
                >
                    Ирина М.
                </Typography>
                <Typography
                    font="Inter-R"
                    size={width > XS_BIG ? 12 : 10}
                    tag="time"
                >
                    Офлайн: 28 минут
                </Typography>
            </div>
            <Typography
                font="Inter-R"
                size={width > MD_LOW ? 14 : width > XS_BIG ? 12 : 10}
                tag="h3"
            >
                Зарядка для iphone 20W type-c быстрое устройство
            </Typography>
            {width > MD_LOW && (
                <div className={cn(cls.product_info)}>
                    <DiscountPlaque className={cn(cls.plaque)}>
                        {90}
                    </DiscountPlaque>
                    <Typography font="Inter-SB" size={12} tag="h5">
                        150 ₽
                    </Typography>
                    <Typography font="Inter-R" size={12} tag="h6">
                        300 ₽
                    </Typography>
                </div>
            )}
        </div>
    );
};

export { HeadAreaSalesmanInfo };
