import { FC, MouseEventHandler, useEffect } from "react";
import { TClassName } from "@/types";
import { cn } from "@/lib";
import { Button, Typography } from "@/components/ui";
import { PlusIcon } from "@/icons";
import Link from "next/link";
import cls from "./index.module.scss";
import { useGetBalanceQuery, useSessionQuery } from "@/hooks/api/auth";
import { ROUTES } from "@/constants";
import { useRouter } from "next/navigation";
import {
    setBalanceSelector,
    useSalesmanBalance,
} from "@/store/useSalesmanBalance";

interface Props extends TClassName {
    sidebarIsExpand: boolean;
}
const UserInfo: FC<Props> = ({ className, sidebarIsExpand }) => {
    const { data: userData } = useSessionQuery();
    const { data: balance } = useGetBalanceQuery();
    const setBalance = useSalesmanBalance(setBalanceSelector);

    useEffect(() => {
        if (balance) setBalance(balance);
    }, [balance]);

    const router = useRouter();

    // const handleBalanceUp: MouseEventHandler = () => {};

    return (
        <div
            className={cn(cls.wrapper, [className], {
                [cls.sidebarIsExpand]: sidebarIsExpand,
            })}
        >
            {userData?.avatar ? (
                <Link href={ROUTES.SALESMAN.PROFILE} className={cn(cls.link)}>
                    <img
                        src="/images/stub/avatar.png"
                        alt="Аватар"
                        width={45}
                        height={45}
                    />
                </Link>
            ) : (
                <></>
            )}
            <div className={cn(cls.content_wrapper)}>
                <div className={cn(cls.content)}>
                    <Typography
                        font="Inter-SB"
                        size={16}
                        tag="h2"
                        className={cn(cls.name, [], {
                            [cls.isNotExpand]: !sidebarIsExpand,
                        })}
                    >
                        {sidebarIsExpand ? userData?.name : userData?.name[0]}
                    </Typography>
                    <Typography font="Inter-R" size={14} tag="h3">
                        {userData?.phone}
                    </Typography>
                    <Typography font="Inter-R" size={14} tag="h4">
                        Баланс: {(+(balance?.accessBalance || 0)).toFixed(0)} ₽
                    </Typography>
                    <Button
                        size="mid"
                        primaryColor="var(--green-100)"
                        wFull
                        theme="fill"
                        className={cn(cls.btn)}
                        onClick={() =>
                            router.push(ROUTES.SALESMAN.BALANCE.VALUE)
                        }
                    >
                        Пополнить
                    </Button>
                    <Link
                        href={"/salesman/balance/tariffs"}
                        className={cn(cls.ransoms)}
                    >
                        <Typography font="Inter-R" size={12}>
                            Выкупы:
                        </Typography>
                        <Typography font="Inter-R" size={12}>
                            {balance?.redemption_count ?? 0} шт
                        </Typography>
                        <button className={cn(cls.plus_btn)}>
                            <PlusIcon color="var(--grey-300)" />
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export { UserInfo };
