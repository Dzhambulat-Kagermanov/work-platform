"use client";
import { FC } from "react";
import { TClassName } from "@/types";
import { cn } from "@/lib";
import { Container } from "@/components/ui";
import { AccountForm } from "@/components/widgets/Buyer/AccountForm";
import { AccountBalance } from "@/components/widgets/Buyer/AccountBalance";
import { AccountStatistic } from "@/components/widgets/Buyer/AccountStatistic";
import { ExitBtnMobile } from "./ExitBtnMobile";
import { ProfileHead } from "@/components/entities/ProfileHead";
import { ExitAccountModal } from "@/components/widgets/shared/ExitAccountModal";
import { useScreen } from "@/hooks";
import { MD_BIG, ROUTES } from "@/constants";
import cls from "./index.module.scss";
import { AuthWrapper } from "@/components/widgets/shared/wrappers";
import { useSessionQuery } from "@/hooks/api/auth";

const AccountPageContent: FC<Props> = ({ className }) => {
    const width = useScreen();
    
    const { data: user } = useSessionQuery();
    
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
            id={user.id}
            name={user.name}
            rating={user.rating}
            registerDate="19.08.2024"
            avatarImage={user.avatar}
            background="/images/account/head-background.png"
        />
        <Container className={cn(cls.dashboard)}>
            <AccountForm className={cn(cls.form)} />
            <div className={cn(cls.half)}>
                <AccountBalance
                    className={cn(cls.balance)}
                    balance={1}
                />
                {/* <AccountNotifications
                    className={cn(cls.notifications)}
                /> */}
                <AccountStatistic
                    className={cn(cls.statistic)}
                    cashbackPaid={10550}
                    productsGrate={342}
                    productsRating={4.7}
                    successfulBuybacks={91}
                />
            </div>
            {width > MD_BIG && (
                <ExitBtnMobile className={cn(cls.exit_btn_mobile)} />
            )}
            <ExitAccountModal className={cn(cls.exit_account_modal)} />
        </Container>
    </main>
    )
}

interface Props extends TClassName {}
const AccountPage: FC<Props> = (props) => {

    return (
        <AuthWrapper roles={["buyer"]} redirectLink={ROUTES.BUYER.AUTH}>
            <AccountPageContent {...props} />
        </AuthWrapper>
    );
};

export { AccountPage };
