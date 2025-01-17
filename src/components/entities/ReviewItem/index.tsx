import { FC, useState } from "react";
import { TClassName } from "@/types";
import { Ratingbar, Typography } from "@/components/ui";
import { cn } from "@/lib";
import cls from "./index.module.scss";
import { TReviewItemProps } from "@/types/reviews";
import { Review } from "@/types/api";
import { dateParserHandler } from "@/handlers";

interface Props extends TClassName {
    item: Review;
}
const ReviewItem: FC<Props> = ({ className, item }) => {
    const [date] = useState(dateParserHandler(item.created_at));

    return (
        <li className={cn(cls.item, [className])}>
            <Ratingbar
                rating={item.rating}
                className={cn(cls.rating)}
                withoutNum
            />
            <Typography font="Inter-B" size={20} tag="h5">
                {item.user_name}
            </Typography>
            {/* {item. && (
                <Typography font="Inter-SB" size={14} tag="h2">
                    {productName}
                </Typography>
            )} */}
            <Typography font="Inter-R" size={14} tag="h4">
                {item.text}
            </Typography>
            <Typography font="Inter-M" size={14} tag="time">
                {date}
            </Typography>
        </li>
    );
};

export { ReviewItem };
