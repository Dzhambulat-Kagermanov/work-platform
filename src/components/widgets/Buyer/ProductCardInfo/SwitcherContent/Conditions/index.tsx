import { FC } from "react";
import cls from "./index.module.scss";
import { TClassName, TProductItemProps } from "@/types";
import { cn } from "@/lib";
import { Typography } from "@/components/ui";
import { Product } from "@/types/api";

interface Props extends TClassName, Pick<Product, "order_conditions"> {}
const Conditions: FC<Props> = ({ className, order_conditions }) => {
    return (
        <div className={cn(cls.wrapper, [className])}>
            <Typography font="Inter-R" size={14} tag="h4">
                {order_conditions}
            </Typography>
        </div>
    );
};

export { Conditions };
