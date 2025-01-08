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
            <ul className={cn(cls.group)}>
                {reviews.map((item, index) => (
                    <ReviewItem
                        key={index}
                        rating={item.rating}
                        date={item.created_at ?? ""}
                        subtitle={item.text}
                        title={item.user_name}
                    />
                ))}
                <ReviewItem
                    rating={4}
                    date="29 июля, 2023"
                    subtitle="Все прошло отлично! Я сразу получила кешбэк после того как продацев
						подтвердил мои действия."
                    title="Анна"
                />
                <ReviewItem
                    rating={4}
                    date="29 июля, 2023"
                    subtitle="Все прошло отлично! Я сразу получила кешбэк после того как продацев
					подтвердил мои действия."
                    title="Анна"
                />
                <ReviewItem
                    rating={4}
                    date="29 июля, 2023"
                    subtitle="Все прошло отлично! Я сразу получила кешбэк после того как продацев
				подтвердил мои действия."
                    title="Анна"
                />
            </ul>
        </div>
    );
};

export { Reviews };
