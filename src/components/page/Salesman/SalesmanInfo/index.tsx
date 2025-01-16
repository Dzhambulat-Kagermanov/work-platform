"use client";
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
import { useGetSellerQuery } from "@/hooks/api/users";
import { useParams } from "next/navigation";
import { PageLoader } from "@/components/ui/loaders";
import { dateParserHandler } from "@/handlers";

interface Props extends TClassName {}
const SalesmanInfoPage: FC<Props> = ({ className }) => {
    const { slug } = useParams();

    const {
        data: profile,
        isLoading,
        isError,
    } = useGetSellerQuery(typeof slug === "string" ? slug : "");

    if (isLoading) {
        return <PageLoader />;
    }

    if (isError || !profile) {
        return <div>Не удалось загрузить страницу.</div>;
    }

    // TODO: Вывести все поля пользователя

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
                id={profile.id}
                name={profile.name ?? ""}
                rating={profile.rating}
                registerDate={dateParserHandler(profile.created_at)}
                avatarImage={profile.avatar ?? ""}
                background="/images/account/head-background.png"
                withoutAvatarChange
            />
            <SalesmanStatistic
                className={cn(cls.statistic)}
                cashbackPaid={10550}
                productsGrate={342}
                productsRating={profile.product_rating}
                successfulBuybacks={91}
            />
            <SalesmanProducts className={cn(cls.products)} />
            <UserReviews
                role="seller"
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
