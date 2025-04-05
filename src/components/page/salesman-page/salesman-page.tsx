"use client";
import { FC } from "react";
import { TClassName } from "@/types";
import { cn } from "@/lib";
import { SalesmanStatistic } from "@/components/widgets/Salesman/SalesmanStatistic";
import { SalesmanProducts } from "@/components/widgets/Salesman/SalesmanProducts";
import { ProfileHead } from "@/components/entities/ProfileHead";
import { UserReviews } from "@/components/widgets/shared/UserReviews";
import { BackButton } from "@/components/ui";
import cls from "./salesman-page.module.scss";
import { useGetSellerQuery } from "@/hooks/api/users";
import { useParams } from "next/navigation";
import { PageLoader } from "@/components/ui/loaders";
import { ROUTES } from "@/constants";
import { PageErrorStub } from "@/components/ui/page-error-stub";

interface Props extends TClassName {}
const SalesmanInfoPage: FC<Props> = ({ className }) => {
    const { id } = useParams();

    const {
        data: profile,
        isLoading,
        isError,
    } = useGetSellerQuery(typeof id === "string" ? id : "");

    if (isLoading) {
        return <PageLoader />;
    }

    if (isError || !profile) {
        return <PageErrorStub />;
    }

    return (
        <main className={cn(cls.main, [className])}>
            <BackButton
                href={`${ROUTES.SALESMAN.MAIN}?homePageType=advertisement`}
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
                registerDate={profile.created_at ?? ""}
                avatarImage={profile.avatar ?? ""}
                background="/images/account/head-background.png"
                withoutAvatarChange
            />
            <SalesmanStatistic
                className={cn(cls.statistic)}
                cashbackPaid={profile.cashback_paid}
                productsGrate={profile.total_reviews}
                productsRating={profile.product_rating}
                successfulBuybacks={profile.success_buybacks}
            />
            <SalesmanProducts
                products={profile.products}
                className={cn(cls.products)}
            />
            <UserReviews
                role="seller"
                reviews={profile.reviews}
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

export default SalesmanInfoPage;
