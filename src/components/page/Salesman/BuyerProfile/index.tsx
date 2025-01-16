import { FC } from "react";
import { TClassName } from "@/types";
import { cn } from "@/lib";
import { BuyerProfileCrumbs } from "@/components/widgets/Salesman/BuyerProfileCrumbs";
import { ProfileHead } from "@/components/entities/ProfileHead";
import { BuyerProfileStatistic } from "@/components/widgets/Salesman/BuyerProfileStatistic";
import { UserReviews } from "@/components/widgets/shared/UserReviews";
import { REVIEWS } from "./constants/reviews";
import cls from "./index.module.scss";

interface Props extends TClassName {}
const BuyerProfilePage: FC<Props> = ({ className }) => {
    return (
        <div className={cn(cls.wrapper, [className])}>
            <BuyerProfileCrumbs className={cn(cls.crumbs)} />
            <ProfileHead
                infoMobileContentCls={cn(cls.head_mobile_content)}
                id={98132}
                name="Екатирина А."
                rating={5}
                registerDate="19.08.2024"
                background="/images/account/head-background-v2.png"
                className={cn(cls.head)}
                withoutAvatarChange
            />
            <BuyerProfileStatistic className={cn(cls.statistic)} />
            <UserReviews role="buyer" reviews={REVIEWS} className={cn(cls.reviews)} />
        </div>
    );
};

export { BuyerProfilePage };
