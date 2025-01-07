import { FC } from "react";
import { TClassName } from "@/types";
import { cn } from "@/lib";
import { BackButton, Container } from "@/components/ui";
import { BalanceInfo } from "@/components/widgets/Buyer/BalanceInfo";
import { BalanceTransactions } from "@/components/widgets/Buyer/BalanceTransactions";
import cls from "./index.module.scss";

interface Props extends TClassName {}
const BalancePage: FC<Props> = ({ className }) => {
    return (
        <main className={cn(cls.balance, [className])}>
            <Container className={cn(cls.content)}>
                <BackButton
                    href="/buyer/account"
                    className={cn(cls.back_btn, ["modules-gap-both"])}
                >
                    Баланс / Финансы
                </BackButton>
                <BalanceInfo className={cn(cls.info)} />
                <BalanceTransactions className={cn(cls.transactions)} />
            </Container>
        </main>
    );
};

export default BalancePage;
