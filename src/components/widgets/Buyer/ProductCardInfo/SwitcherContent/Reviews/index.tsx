import { FC } from "react";
import { TClassName } from "@/types";
import { cn } from "@/lib";
import cls from "./index.module.scss";
import { ReviewItem } from "@/components/entities/ReviewItem";

interface Props extends TClassName {
    itemCls?: string;
}
const Reviews: FC<Props> = ({ className, itemCls }) => {
    return (
        <div className={cn(cls.wrapper, [className])}>
            <ul className={cn(cls.group)}>
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
