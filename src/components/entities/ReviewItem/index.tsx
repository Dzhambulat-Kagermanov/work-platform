import { FC } from "react";
import { TClassName } from "@/types";
import { Ratingbar, Typography } from "@/components/ui";
import { cn } from "@/lib";
import cls from "./index.module.scss";
import { TReviewItemProps } from "@/types/reviews";

interface Props extends TClassName, TReviewItemProps {}
const ReviewItem: FC<Props> = ({
    className,
    date,
    subtitle,
    title,
    productName,
    rating,
}) => {
    return (
        <li className={cn(cls.item, [className])}>
            <Ratingbar rating={rating} className={cn(cls.rating)} withoutNum />
            <Typography font="Inter-B" size={20} tag="h5">
                {title}
            </Typography>
            {productName && (
                <Typography font="Inter-SB" size={14} tag="h2">
                    {productName}
                </Typography>
            )}
            <Typography font="Inter-R" size={14} tag="h4">
                {subtitle}
            </Typography>
            <Typography font="Inter-M" size={14} tag="time">
                {date}
            </Typography>
        </li>
    );
};

export { ReviewItem };
