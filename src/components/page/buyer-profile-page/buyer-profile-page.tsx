"use client";

import { FC, useEffect, useState } from "react";
import { Container, BackButton } from "@/components/ui";
import { PageLoader } from "@/components/ui/loaders";
import { cn } from "@/lib";
import cls from "./buyer-profile-page.module.scss";
import { ProfileHead } from "@/components/entities/ProfileHead";
import { BuyerStatistic } from "@/components/widgets/Buyer/BuyerStatistic";
import { useParams } from "next/navigation";
import { TUserInfo } from "@/types";
import { ROUTES } from "@/constants";
import { PageErrorStub } from "@/components/ui/page-error-stub";

// Temporary mock data until API is connected
const MOCK_BUYER_DATA: TUserInfo & {
    buybacks_stats: {
        total: number;
        success_percentage: number;
    }
} = {
    id: 1,
    name: "Покупатель",
    rating: 4.8,
    registerDate: "01.01.2023",
    phoneNumber: 79001234567,
    email: "buyer@example.com",
    balance: 0,
    avatarImage: "/images/stub/avatar.png",
    buybacks_stats: {
        total: 8,
        success_percentage: 75
    }
};



interface Props {}

const BuyerProfilePage: FC<Props> = () => {
    const { id } = useParams<{ id: string }>();
    const [isLoading, setIsLoading] = useState(true);
    const [buyerData, setBuyerData] = useState<TUserInfo | null>(null);

    useEffect(() => {
        // Simulate API call to fetch buyer data
        const fetchBuyerData = async () => {
            // In production, replace with actual API call to fetch buyer data by ID
            // For now, using mock data with a timeout to simulate network request
            setTimeout(() => {
                setBuyerData({
                    ...MOCK_BUYER_DATA,
                    id: Number(id),
                });
                setIsLoading(false);
            }, 500);
        };

        if (id) {
            fetchBuyerData();
        }
    }, [id]);

    if (isLoading) {
        return <PageLoader className="h-[80dvh] min-h-[250px]" />;
    }

    if (!buyerData) {
        return <PageErrorStub text="Информация о покупателе не найдена" />;
    }

    return (
        <main className={cn(cls.main)}>
            <BackButton
                href={ROUTES.MAIN}
                className={cn(cls.back_btn, ["modules-gap-bottom"])}
            >
                Назад
            </BackButton>
            <ProfileHead
                infoMobileContentCls={cn(cls.head_mobile_content)}
                className={cn(cls.head)}
                id={buyerData.id}
                name={buyerData.name}
                rating={buyerData.rating}
                registerDate={buyerData.registerDate}
                avatarImage={buyerData.avatarImage}
                background="/images/account/head-background.png"
                withoutAvatarChange
            />
            <BuyerStatistic
                className={cn(cls.statistic)}
                totalBuybacks={(buyerData as any).buybacks_stats?.total || 0}
                successPercentage={(buyerData as any).buybacks_stats?.success_percentage || 0}
            />
        </main>
    );
};

export default BuyerProfilePage;
