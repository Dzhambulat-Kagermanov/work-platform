import { FC } from "react";
import { TClassName } from "@/types";
import { cn } from "@/lib";
import { Typography } from "@/components/ui";
import cls from "./index.module.scss";

interface Props extends TClassName {
    totalBuybacks: number;
    successPercentage: number;
}

const BuyerStatistic: FC<Props> = ({
    className,
    totalBuybacks,
    successPercentage,
}) => {
    return (
        <section className={cn(cls.wrapper, [className])}>
            <div className={cn(cls.block)}>
                <div className={cn(cls.item)}>
                    <div className={cn(cls.value)}>
                        <Typography tag="h3" font="Inter-B" size={25}>
                            {totalBuybacks}
                        </Typography>
                    </div>
                    <div className={cn(cls.name)}>
                        <Typography tag="h4" font="Inter-R" size={12} className="max-md:text-[10px]">
                            Всего выкупов
                        </Typography>
                    </div>
                </div>
                <div className={cn(cls.item)}>
                    <div className={cn(cls.value)}>
                        <Typography tag="h3" font="Inter-B" size={25}>
                            {successPercentage}%
                        </Typography>
                    </div>
                    <div className={cn(cls.name)}>
                        <Typography tag="h4" font="Inter-R" size={12} className="max-md:text-[10px]">
                            Процент выкупов
                        </Typography>
                    </div>
                </div>

            </div>
        </section>
    );
};

export { BuyerStatistic };
