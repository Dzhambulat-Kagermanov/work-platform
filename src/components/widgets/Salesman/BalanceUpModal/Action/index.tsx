"use client";
import { FC, MouseEventHandler, useState } from "react";
import { TClassName, TState } from "@/types";
import { cn } from "@/lib";
import { TModalStep } from "..";
import { useModalStore } from "@/store";
import { SALESMAN_BALANCE_UP_MODAL } from "@/constants";
import Image from "next/image";
import { Button, Input } from "@/components/ui";
import cls from "./index.module.scss";
import { useBalanceTopUpMutation } from "@/hooks/api/balance";
import toast from "react-hot-toast";
import { useGetBalanceQuery } from "@/hooks/api/auth";

interface Props extends TClassName {
    setStep: TState<TModalStep>;
    amount: string;
    setAmount: TState<string>;
}
const Action: FC<Props> = ({ className, setStep, amount, setAmount, }) => {

    const { refetch } = useGetBalanceQuery();
    const { mutate: balanceTopUpMutate, isPending } = useBalanceTopUpMutation();

    const hideModal = useModalStore((state) => state.hideModal);
    const handleUp: MouseEventHandler = () => {
        
        balanceTopUpMutate(amount, {
            onSuccess: () => {
                setStep("success");
                refetch();
            },
            onError: () => {
                toast.error("Не удалось пополнить баланс");
            }
        });

    };
    const handleBack: MouseEventHandler = () => {
        hideModal({ slug: SALESMAN_BALANCE_UP_MODAL });
    };

    return (
        <div className={cn(cls.wrapper, [className])}>
            <div className={cn(cls.head)}>
                <Image
                    src={"/images/salesman/home/action-impossible.svg"}
                    alt="Не хватает средств"
                    width={48}
                    height={48}
                />
                <div className={cn(cls.info)}>
                    {/* <Typography font="Inter-SB" size={18} tag="h2">
                        Вам не хватает 400 ₽
                    </Typography>
                    <Typography font="Inter-R" size={14} tag="h3">
                        На основном балансе - 5600 ₽
                    </Typography> */}
                    <Input placeholder="Введите сумму" type="number" value={amount} onChange={(e) => setAmount(e.target.value)} min={500} />
                </div>
            </div>
            <div className={cn(cls.actions)}>
                <Button
                    className={cn(cls.btn)}
                    size="mid"
                    theme="outline"
                    onClick={handleBack}
                    disabled={isPending}
                >
                    Назад
                </Button>
                <Button
                    className={cn(cls.btn)}
                    size="mid"
                    theme="fill"
                    onClick={handleUp}
                    disabled={isPending}
                >
                    Пополнить баланс
                </Button>
            </div>
        </div>
    );
};

export { Action };
