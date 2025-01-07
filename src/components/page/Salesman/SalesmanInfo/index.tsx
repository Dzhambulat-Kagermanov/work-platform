import { FC } from "react";
import { TClassName } from "@/types";
import { cn } from "@/lib";
import { SalesmanStatistic } from "@/components/widgets/Salesman/SalesmanStatistic";
import { SalesmanProducts } from "@/components/widgets/Salesman/SalesmanProducts";
import { ProfileHead } from "@/components/entities/ProfileHead";
import { UserReviews } from "@/components/widgets/shared/UserReviews";
import { REVIEWS } from "./constants/reviews";
import { BackButton } from "@/components/ui";
import cls from "./index.module.scss";

interface Props extends TClassName {}
const SalesmanInfoPage: FC<Props> = ({ className }) => {
    return (
        <main className={cn(cls.main, [className])}>
            <BackButton
                href="/salesman?homePageType=advertisement"
                className={cn(cls.back_btn, ["modules-gap-bottom"])}
            >
                Назад
            </BackButton>
            <ProfileHead
                infoMobileContentCls={cn(cls.head_mobile_content)}
                className={cn(cls.head)}
                id={21834}
                name="Екатерина М."
                rating={4.7}
                registerDate="19.08.2024"
                avatarImage=""
                background="/images/account/head-background.png"
                withoutAvatarChange
            />
            <SalesmanStatistic
                className={cn(cls.statistic)}
                cashbackPaid={10550}
                productsGrate={342}
                productsRating={4.7}
                successfulBuybacks={91}
            />
            <SalesmanProducts className={cn(cls.products)} />
            <UserReviews
                reviews={REVIEWS}
                className={cn(cls.reviews)}
                customBreakPoints={{
                    0: {
                        slidesPerView: 1,
                    },
                    1025: {
                        slidesPerView: 2,
                    },
                    1501: {
                        slidesPerView: 3,
                    },
                }}
            />
        </main>
    );
};

export { SalesmanInfoPage };
