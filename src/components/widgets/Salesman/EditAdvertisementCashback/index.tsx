import { FC } from "react";
import { TClassName } from "@/types";
import { Typography, SliderInput } from "@/components/ui";
import { cn } from "@/lib";
import cls from "./index.module.scss";

interface Props extends TClassName {}
const EditAdvertisementCashback: FC<Props> = ({ className }) => {
    return (
        <section className={cn(cls.wrapper, [className])}>
            <Typography font="Inter-M" size={14} tag="h2">
                Укажите размер кэшбека:
            </Typography>
            <SliderInput
                className={cn(cls.slider_inp)}
                max={100}
                min={0}
                steps={20}
                visibleMaxValue
                visibleMinValue
                visibleValue
                defaultValue={30}
                customVisibleMaxValue={(val) => (
                    <Typography font="Inter-R" size={16}>
                        {val}%
                    </Typography>
                )}
                customVisibleMinValue={(val) => (
                    <Typography font="Inter-R" size={16}>
                        {val}%
                    </Typography>
                )}
                customVisibleValue={(val) => (
                    <Typography font="Inter-R" size={16}>
                        {val}%
                    </Typography>
                )}
            />
            <Typography font="Inter-M" size={18} tag="h4">
                Кэшбек для покупателя = <span>0 ₽</span>
            </Typography>
        </section>
    );
};

export { EditAdvertisementCashback };
