"use client";
import { FC, useState } from "react";
import { TClassName } from "@/types";
import { ModalBase } from "@/components/ui";
import { SALESMAN_BALANCE_UP_MODAL } from "@/constants";
import { cn } from "@/lib";
import { Action } from "./Action";
import { Success } from "./Success";
import cls from "./index.module.scss";
import { RansomsType } from "@/components/page/Salesman/Balance";
import { useTariffByRansomsQuery } from "@/hooks/api/tariffs";
import { ModalLoader } from "@/components/ui/loaders";

export type TModalStep = "action" | "success";

interface Props extends TClassName, Pick<RansomsType, "ransoms"> {}

const BalanceUpModalContent: FC<
    Props & {
        step: TModalStep;
        setStep: React.Dispatch<React.SetStateAction<TModalStep>>;
    }
> = ({ className, ransoms, step, setStep }) => {
    const {
        data: tariff,
        isLoading,
        isError,
    } = useTariffByRansomsQuery(`${ransoms}`);
    return (
        <div className={cn(cls.content)}>
            {isLoading ? (
                <ModalLoader />
            ) : step === "action" ? (
                <Action className={cn(cls.action)} setStep={setStep} />
            ) : (
                <Success className={cn(cls.success)} />
            )}
        </div>
    );
};

const BalanceUpModal: FC<Props> = ({ className, ransoms }) => {
    const [step, setStep] = useState<TModalStep>("action");

    return (
        <ModalBase
            slug={SALESMAN_BALANCE_UP_MODAL}
            className={cn(cls.wrapper, [className])}
        >
            <BalanceUpModalContent
                step={step}
                setStep={setStep}
                ransoms={ransoms}
            />
        </ModalBase>
    );
};

export { BalanceUpModal };
