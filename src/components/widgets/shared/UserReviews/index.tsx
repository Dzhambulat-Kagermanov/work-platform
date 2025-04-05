import { FC } from "react";
import { TClassName } from "@/types";
import { Container, Typography } from "@/components/ui";
import { cn } from "@/lib";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { ReviewItem } from "@/components/entities/ReviewItem";
import { ActionArrowIcon } from "@/icons";
import { MD_BIG, SM_MID } from "@/constants";
import cls from "./index.module.scss";
import { SwiperOptions } from "swiper/types";
import { Review, RoleSlug } from "@/types/api";

interface Props extends TClassName {
    reviews: Review[];
    role?: RoleSlug;
    customBreakPoints?:
        | {
              [width: number]: SwiperOptions;
              [ratio: string]: SwiperOptions;
          }
        | undefined;
}
const UserReviews: FC<Props> = ({
    className,
    reviews,
    role,
    customBreakPoints,
}) => {
    return (
        <Container tag="section" className={cn(cls.wrapper, [className])}>
            <div className={cn(cls.head)}>
                <Typography
                    font="Inter-B"
                    size={25}
                    tag="h2"
                    className={cn(cls.title)}
                >
                    Отзывы {role === "buyer" ? "покупателя" : "о продавце"}
                </Typography>
                <Typography font="Inter-R" size={25} className={cn(cls.title)}>
                    ({reviews.length})
                </Typography>
            </div>
            <div className={cn(cls.content)}>
                <Swiper
                    breakpoints={
                        customBreakPoints || {
                            0: {
                                slidesPerView: 1,
                            },
                            [SM_MID + 1]: {
                                slidesPerView: 2,
                            },
                            [MD_BIG + 1]: {
                                slidesPerView: 3,
                            },
                        }
                    }
                    className={cn(cls.slider)}
                    slidesPerView={3}
                    loop
                    spaceBetween={15}
                    modules={[Navigation, Autoplay]}
                    speed={500}
                    autoplay
                    navigation={{
                        enabled: true,
                        nextEl: `.${cls.next_btn}`,
                        prevEl: `.${cls.prev_btn}`,
                    }}
                >
                    {reviews.map((item, idx) => {
                        return (
                            <SwiperSlide
                                className={cn(cls.item)}
                                key={idx + "/"}
                            >
                                <ReviewItem
                                    item={item}
                                    className={cn(cls.review)}
                                />
                            </SwiperSlide>
                        );
                    })}
                </Swiper>

                <button className={cn(cls.btn, [cls.prev_btn])}>
                    <ActionArrowIcon
                        color="var(--black-100)"
                        className={cn(cls.icon)}
                    />
                </button>
                <button className={cn(cls.btn, [cls.next_btn])}>
                    <ActionArrowIcon
                        color="var(--black-100)"
                        className={cn(cls.icon)}
                    />
                </button>
            </div>
        </Container>
    );
};

export { UserReviews };
