"use client";
import { FC } from "react";
import { TClassName } from "@/types";
import { cn } from "@/lib";
import { BuyerProfileCrumbs } from "@/components/widgets/Salesman/BuyerProfileCrumbs";
import { ProfileHead } from "@/components/entities/ProfileHead";
import { BuyerProfileStatistic } from "@/components/widgets/Salesman/BuyerProfileStatistic";
import { UserReviews } from "@/components/widgets/shared/UserReviews";
import cls from "./index.module.scss";
import { useGetBuyerQuery } from "@/hooks/api/users";
import { PageLoader } from "@/components/ui/loaders";
import { useParams } from "next/navigation";

interface Props extends TClassName {}
const BuyerProfilePage: FC<Props> = ({ className }) => {
    const { id } = useParams();

    const {
        data: profile,
        isError,
        isLoading,
    } = useGetBuyerQuery(typeof id === "string" ? id : "");

    if (isLoading) {
        return <PageLoader />;
    }

    if (isError || !profile) {
        return <div>Не удалось загрузить страницу.</div>;
    }

    return (
        <div className={cn(cls.wrapper, [className])}>
            <BuyerProfileCrumbs className={cn(cls.crumbs)} />
            <ProfileHead
                infoMobileContentCls={cn(cls.head_mobile_content)}
                className={cn(cls.head)}
                id={profile.id}
                name={profile.name ?? ""}
                rating={profile.rating}
                registerDate={profile.created_at ?? ""}
                avatarImage={profile.avatar ?? ""}
                background="/images/account/head-background-v2.png"
                withoutAvatarChange
            />
            <BuyerProfileStatistic className={cn(cls.statistic)} />
            <UserReviews
                role="buyer"
                reviews={[]}
                className={cn(cls.reviews)}
            />
        </div>
    );
};

export { BuyerProfilePage };
