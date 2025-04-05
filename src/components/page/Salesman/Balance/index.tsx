import { FC, useState } from "react";
import { TClassName } from "@/types";
import { cn } from "@/lib";
import { Typography } from "@/components/ui";
import { BalanceInfo } from "@/components/widgets/Salesman/BalanceInfo";
import { BalanceTransactions } from "@/components/widgets/Salesman/BalanceTransactions";
import { BalancePromocodeModal } from "@/components/widgets/Salesman/BalancePromocodeModal";
import { BalanceUpModal } from "@/components/widgets/Salesman/BalanceUpModal";
import cls from "./index.module.scss";

export type RansomsType = {
    ransoms: number;
    setRansoms: React.Dispatch<React.SetStateAction<number>>;
};

interface Props extends TClassName {}
const BalancePage: FC<Props> = ({ className }) => {
    const [ransoms, setRansoms] = useState(0);

    return (
        <div className={cn(cls.main, [className])}>
            <Typography font="Inter-SB" size={30} tag="h1">
                Баланс
            </Typography>
            <Typography font="Inter-R" size={16} tag="h2">
                Общая информация
            </Typography>
            <BalanceInfo
                ransoms={ransoms}
                setRansoms={setRansoms}
                className={cn(cls.info)}
            />
            <BalanceTransactions className={cn(cls.transactions)} />
            <BalancePromocodeModal className={cn(cls.promocode_modal)} />
            <BalanceUpModal
                ransoms={ransoms}
                className={cn(cls.balance_up_modal)}
            />
        </div>
    );
};

export { BalancePage };
