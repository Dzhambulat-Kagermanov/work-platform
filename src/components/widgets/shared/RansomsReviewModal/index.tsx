"use client";
import { FC, useState } from "react";
import { TClassName } from "@/types";
import { Button, Input, ModalBase, Typography } from "@/components/ui";
import { BUYER_DELIVERY_REVIEW_MODAL } from "@/constants";
import { cn } from "@/lib";
import { useModalStore } from "@/store";
import { StarIcon } from "@/icons";
import cls from "./index.module.scss";

interface Props extends TClassName {}
const RansomsReviewModal: FC<Props> = ({ className }) => {
    const [rating, setRating] = useState<number>(0);
    const hideModal = useModalStore((state) => state.hideModal);

    const handleCancel = () => {
        hideModal({ slug: BUYER_DELIVERY_REVIEW_MODAL });
    };
    const handleReviewing = () => {
        hideModal({ slug: BUYER_DELIVERY_REVIEW_MODAL });
    };
    const handleStarClick = (thisRating: number) => {
        if (rating === thisRating && thisRating === 1) {
            setRating(0);
        } else {
            setRating(thisRating);
        }
    };

    return (
        <ModalBase
            slug={BUYER_DELIVERY_REVIEW_MODAL}
            className={cn(cls.wrapper, [className])}
        >
            <div className={cn(cls.content)}>
                <Typography font="Inter-SB" size={18} tag="h2">
                    Отзыв о продавце
                </Typography>
                <Typography font="Inter-M" size={14} tag="h3">
                    Расскажите о том, как прошел выкуп.
                </Typography>
                <div className={cn(cls.rating_wrapper)}>
                    <Typography font="Inter-M" size={14} tag="h5">
                        Оценка:
                    </Typography>
                    <div className={cn(cls.rating)}>
                        {[...Array(5)].map((_, idx) => {
                            const thisRating = idx + 1;
                            return (
                                <StarIcon
                                    onClick={() => {
                                        handleStarClick(thisRating);
                                    }}
                                    color="var(--white-300)"
                                    className={cn(cls.star, [], {
                                        [cls.active]: rating >= thisRating,
                                    })}
                                    key={idx}
                                />
                            );
                        })}
                    </div>
                </div>
                <Input
                    placeholder="Ваш отзыв"
                    wrapperCls={cn(cls.inp_wrapper)}
                    inpCls={cn(cls.inp)}
                />
                <div className={cn(cls.btns)}>
                    <Button
                        size="mid"
                        theme="outline"
                        className={cn(cls.btn)}
                        onClick={handleCancel}
                    >
                        Отмена
                    </Button>
                    <Button
                        size="mid"
                        theme="fill"
                        className={cn(cls.btn)}
                        onClick={handleReviewing}
                    >
                        Оставить отзыв
                    </Button>
                </div>
            </div>
        </ModalBase>
    );
};

export { RansomsReviewModal };
