import { FC } from "react";
import { TChatMessageReviewProps, TClassName, TTag } from "@/types";
import { cn } from "@/lib";
import { Ratingbar, Typography } from "@/components/ui";
import { OpenReviewModalInChat } from "@/components/features/OpenReviewModalInChat";
import cls from "./index.module.scss";

interface Props extends TClassName, TChatMessageReviewProps, TTag {}
const MessagesAreaReview: FC<Props> = ({
    message: { description, rating },
    tag = "div",
    className,
}) => {
    const Tag = tag;

    return (
        <Tag className={cn(cls.wrapper, [className])}>
            <div className={cn(cls.content)}>
                <Ratingbar
                    withoutNum
                    className={cn(cls.rating)}
                    rating={rating}
                />
                <Typography font="Inter-B" size={20} tag="h2">
                    Ваш отзыв
                </Typography>
                <Typography font="Inter-R" size={16} tag="h3">
                    {description}
                </Typography>
            </div>
            <OpenReviewModalInChat className={cn(cls.open_modal_btn)} />
        </Tag>
    );
};

export { MessagesAreaReview };
