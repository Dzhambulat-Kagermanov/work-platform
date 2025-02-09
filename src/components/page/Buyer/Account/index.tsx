"use client";
import { FC } from "react";
import { TClassName } from "@/types";
import { cn } from "@/lib";
import { Container } from "@/components/ui";
import { AccountForm } from "@/components/widgets/Buyer/AccountForm";
import { AccountBalance } from "@/components/widgets/Buyer/AccountBalance";
import { AccountNotifications } from "@/components/widgets/Buyer/AccountNotifications";
import { AccountStatistic } from "@/components/widgets/Buyer/AccountStatistic";
import { ExitBtnMobile } from "./ExitBtnMobile";
import { ProfileHead } from "@/components/entities/ProfileHead";
import { ExitAccountModal } from "@/components/widgets/shared/ExitAccountModal";
import { useScreen } from "@/hooks";
import { MD_BIG } from "@/constants";
import cls from "./index.module.scss";

interface Props extends TClassName {}
const AccountPage: FC<Props> = ({ className }) => {
    const width = useScreen();
    return (
        <main className={cn(cls.account, [className, "modules-gap-top"])}>
            <ProfileHead
                contentContainerCls={cn(cls.head_content_container)}
                infoMobileBackgContentCls={cn(
                    cls.head_info_mobile_backg_content,
                )}
                className={cn(cls.head)}
                id={21834}
                name="Екатерина М."
                rating={4.7}
                registerDate="19.08.2024"
                avatarImage=""
                background="/images/account/head-background.png"
            />
            <Container className={cn(cls.dashboard)}>
                <AccountForm className={cn(cls.form)} />
                <div className={cn(cls.half)}>
                    <AccountBalance
                        className={cn(cls.balance)}
                        balance={1700}
                    />
                    <AccountNotifications className={cn(cls.notifications)} />
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
    );
};

export { AccountPage };
