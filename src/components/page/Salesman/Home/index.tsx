"use client";
import { FC, Suspense } from "react";
import { TClassName } from "@/types";
import { cn } from "@/lib";
import { Typography } from "@/components/ui";
import { HomeCrumbs } from "@/components/widgets/Salesman/HomeCrumbs";
import {
    HomePagesSwitcher,
    TSalesmanHomePageType,
} from "@/components/widgets/Salesman/HomePagesSwitcher";
import { HomeActions } from "@/components/widgets/Salesman/HomeActions";
import { HomeAddProductModal } from "@/components/widgets/Salesman/HomeAddProductModal";
import { HomeProductsContent } from "@/components/widgets/Salesman/HomeProductsContent";
import { HomeRansomsContent } from "@/components/widgets/Salesman/HomeRansomsContent";
import { HomeAdvertisementsContent } from "@/components/widgets/Salesman/HomeAdvertisementsContent";
import { HomeAdvertisementArchiveModal } from "@/components/widgets/Salesman/HomeAdvertisementArchiveModal";
import { HomeAdvertisementStopModal } from "@/components/widgets/Salesman/HomeAdvertisementStopModal";
import { HomeAddAdvertisementModal } from "@/components/widgets/Salesman/HomeAddAdvertisementModal";
import cls from "./index.module.scss";
import { useSessionQuery } from "@/hooks/api/auth";
import { ChatStatus } from "@/types/api";

interface Props extends TClassName {
    homePageType: TSalesmanHomePageType;
    chatType: ChatStatus;
}
const HomePage: FC<Props> = ({ className, homePageType, chatType }) => {
    const { data: userData } = useSessionQuery();

    return (
        <div className={cn(cls.main, [className])}>
            {/* <Typography tag="h1" font="Inter-SB" size={30}>
                Привет, {userData?.name}
            </Typography> */}
            <HomeCrumbs
                homePageType={homePageType}
                className={cn(cls.crumbs)}
            />
            <Suspense fallback={<></>}>
                <HomePagesSwitcher className={cn(cls.switcher)} />
            </Suspense>
            <HomeActions
                homePageType={homePageType}
                className={cn(cls.actions)}
            />
            {homePageType === null ? (
                <>
                    <HomeProductsContent className={cn(cls.products)} />
                    <HomeAddProductModal
                        className={cn(cls.add_product_modal)}
                    />
                </>
            ) : homePageType === "ransoms" ? (
                <HomeRansomsContent
                    className={cn(cls.ransoms)}
                    chatType={chatType}
                />
            ) : (
                <>
                    <HomeAdvertisementsContent
                        className={cn(cls.advertisement)}
                    />
                    <HomeAdvertisementArchiveModal
                        className={cn(cls.advertisement_action_modal)}
                    />
                    <HomeAdvertisementStopModal className={cn(cls.stop)} />
                    <HomeAddAdvertisementModal
                        className={cn(cls.add_advertisement)}
                    />
                </>
            )}
        </div>
    );
};

export { HomePage };
