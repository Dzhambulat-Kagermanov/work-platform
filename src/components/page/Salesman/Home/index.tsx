import { FC, Suspense } from "react";
import { TClassName } from "@/types";
import { cn } from "@/lib";
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
import { ChatStatus } from "@/types/api";

interface Props extends TClassName {
    homePageType: TSalesmanHomePageType;
    chatType: ChatStatus;
}
const HomePage: FC<Props> = ({ className, homePageType, chatType }) => {
    return (
        <div className={cn(cls.main, [className])}>
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
                    <Suspense fallback={<></>}>
                        <HomeProductsContent className={cn(cls.products)} />
                    </Suspense>
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
                    <Suspense fallback={<></>}>
                        <HomeAdvertisementsContent
                            className={cn(cls.advertisement)}
                        />
                    </Suspense>
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
