"use client";
import { FC, useState } from "react";
import { TClassName } from "@/types";
import { ModalBase } from "@/components/ui";
import { SALESMAN_BALANCE_PROMOCODE_MODAL } from "@/constants";
import { cn } from "@/lib";
import { Action } from "./Action";
import { Success } from "./Success";
import cls from "./index.module.scss";
import { usePromocodeMutation } from "@/hooks/api/seller";
import { AxiosError } from "axios";

export type ModalStep = "action" | "success";

interface Props extends TClassName {}
const BalancePromocodeModal: FC<Props> = ({ className }) => {
    const promocodeMutation = usePromocodeMutation();

    const [step, setStep] = useState<ModalStep>("action");
    const [error, setError] = useState("");

    const handleSubmit = (value: string) => {
        if (!value) {
            return setError("Введите промокод");
        }

        promocodeMutation.mutate(value, {
            onSuccess: () => {
                setStep("success");
            },
            onError: (e) => {
                const error = e as AxiosError<{ message: string }>;
                setError(
                    error.response?.data.message ??
                        "Не удалось применить промокод",
                );
            },
        });
    };
    return (
        <ModalBase
            onClose={() => {
                setStep("action");
                setError("");
            }}
            disableClose={promocodeMutation.isPending}
            slug={SALESMAN_BALANCE_PROMOCODE_MODAL}
            className={cn(cls.wrapper, [className])}
        >
            <div className={cn(cls.content)}>
                {step === "action" ? (
                    <Action
                        disabledClose={promocodeMutation.isPending}
                        error={error}
                        onSubmit={handleSubmit}
                        className={cn(cls.action)}
                    />
                ) : (
                    <Success className={cn(cls.success)} />
                )}
            </div>
        </ModalBase>
    );
};

export { BalancePromocodeModal };
