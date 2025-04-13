"use client";
import { FC } from "react";
import { TClassName } from "@/types";
import { cn } from "@/lib";
import { Container } from "@/components/ui";
import { AccountForm } from "@/components/widgets/Buyer/AccountForm";
import { AccountBalance } from "@/components/widgets/account-balance";
import { ExitBtnMobile } from "./ExitBtnMobile";
import { ProfileHead } from "@/components/entities/ProfileHead";
import { ExitAccountModal } from "@/components/widgets/shared/ExitAccountModal";
import { useScreen } from "@/hooks";
import { MD_BIG, ROUTES } from "@/constants";
import cls from "./account-page.module.scss";
import { AuthWrapper } from "@/components/widgets/shared/wrappers";
import { useGetStatisticsQuery, useSessionQuery } from "@/hooks/api/auth";
import { RoleSlug } from "@/types/api";
import { AccountStatistic } from "@/components/widgets/account-statistic";
import { AccountNotifications } from "@/components/widgets/Buyer/AccountNotifications";

const AccountPageContent: FC<Props> = ({ className, forSalesman }) => {
    const width = useScreen();

    const { data: user } = useSessionQuery();
    const { data: statistic } = useGetStatisticsQuery();

    if (!user) {
        return <></>;
    }

    return (
        <main className={cn(cls.account, [className, "modules-gap-top"])}>
            <ProfileHead
                contentContainerCls={cn(cls.head_content_container)}
                infoMobileBackgContentCls={cn(
                    cls.head_info_mobile_backg_content,
                )}
                className={cn(cls.head)}
                id={user?.id ?? 0}
                name={user?.name ?? ""}
                rating={user?.rating ?? 0}
                registerDate={`${user.created_at}`}
                avatarImage={user?.avatar ?? ""}
                background="/images/account/head-background.png"
            />
            <Container className={cn(cls.dashboard)}>
                <AccountForm
                    className={cn(cls.form)}
                    forSalesman={forSalesman}
                />
                <div className={cn(cls.half)}>
                    <AccountBalance className={cn(cls.balance)} balance={1} />
                    <AccountNotifications className={cn(cls.notifications)} />
                    <AccountStatistic
                        className={cn(cls.statistic)}
                        cashbackPaid={statistic?.cashback_paid ?? 0}
                        productsGrate={statistic?.total_reviews ?? 0}
                        productsRating={statistic?.product_rating ?? 0}
                        successfulBuybacks={statistic?.success_buybacks ?? 0}
                    />
                </div>
                {width > MD_BIG && (
                    <ExitBtnMobile className={cn(cls.exit_btn_mobile)} />
                )}
                <ExitAccountModal className={cn(cls.exit_account_modal)} />
            </Container>
        </main>
    );
};

interface Props extends TClassName {
    role: RoleSlug;
    forSalesman?: boolean;
}
const AccountPage: FC<Props> = (props) => {
    return (
        <AuthWrapper
            roles={[props.role]}
            redirectLink={
                ROUTES[props.role === "buyer" ? "BUYER" : "SALESMAN"].AUTH
            }
        >
            <AccountPageContent {...props} />
        </AuthWrapper>
    );
};

export default AccountPage;
