import { FC } from "react";
import { TClassName } from "@/types";
import { cn } from "@/lib";
import cls from "./index.module.scss";
import { ReviewItem } from "@/components/entities/ReviewItem";
import { Review } from "@/types/api";

interface Props extends TClassName {
    itemCls?: string;
    reviews: Review[];
}
const Reviews: FC<Props> = ({ className, reviews }) => {
    if (!reviews.length) {
        return <></>;
    }

    return (
        <div className={cn(cls.wrapper, [className])}>
            {reviews || reviews.length > 0 ?<ul className={cn(cls.group)}>
                {reviews.map((item, index) => (
                    <ReviewItem key={index} item={item} />
                ))}
            </ul> : }
        </div>
    );
};

export { Reviews };
