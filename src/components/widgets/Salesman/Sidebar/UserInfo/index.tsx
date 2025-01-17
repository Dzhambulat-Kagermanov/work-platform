import { FC, MouseEventHandler } from "react";
import { TClassName } from "@/types";
import { cn } from "@/lib";
import Image from "next/image";
import { Button, Typography } from "@/components/ui";
import { PlusIcon } from "@/icons";
import Link from "next/link";
import cls from "./index.module.scss";
import { useGetBalanceQuery, useSessionQuery } from "@/hooks/api/auth";
import { ROUTES } from "@/constants";
import { useRouter } from "next/navigation";

interface Props extends TClassName {
    sidebarIsExpand: boolean;
}
const UserInfo: FC<Props> = ({ className, sidebarIsExpand }) => {
    const { data: userData } = useSessionQuery();
    const { data: balance } = useGetBalanceQuery();

    const router = useRouter();

    const handleBalanceUp: MouseEventHandler = () => {};
    return (
        <div
            className={cn(cls.wrapper, [className], {
                [cls.sidebarIsExpand]: sidebarIsExpand,
            })}
        >
            <Link href={ROUTES.SALESMAN.PROFILE} className={cn(cls.link)}>
                <Image
                    src="/images/stub/avatar.png"
                    alt="Аватар"
                    width={45}
                    height={45}
                />
            </Link>
            <div className={cn(cls.content_wrapper)}>
                <div className={cn(cls.content)}>
                    <Typography font="Inter-SB" size={16} tag="h2">
                        {userData?.name}
                    </Typography>
                    <Typography font="Inter-R" size={14} tag="h3">
                        {userData?.phone}
                    </Typography>
                    <Typography font="Inter-R" size={14} tag="h4">
                        Баланс: {balance?.accessBalance} ₽
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
