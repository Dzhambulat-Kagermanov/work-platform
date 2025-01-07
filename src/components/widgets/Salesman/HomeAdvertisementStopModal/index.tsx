"use client";
import { FC, useState } from "react";
import { TClassName } from "@/types";
import { ModalBase } from "@/components/ui";
import { SALESMAN_ADVERTISEMENT_STOP_MODAL } from "@/constants";
import { cn } from "@/lib";
import { ActionStop } from "./ActionStop";
import { FailStop } from "./FailStop";
import cls from "./index.module.scss";

export type TModalStep = "action-stop" | "fail-stop";

interface Props extends TClassName {}
const HomeAdvertisementStopModal: FC<Props> = ({ className }) => {
    const [step, setStep] = useState<TModalStep>("action-stop");

    return (
        <ModalBase
            slug={SALESMAN_ADVERTISEMENT_STOP_MODAL}
            className={cn(cls.wrapper, [className])}
            onClose={() => {
                setStep("action-stop");
            }}
        >
            <div className={cn(cls.content)}>
                {step === "action-stop" ? (
                    <ActionStop
                        setStep={setStep}
                        className={cn(cls.action_stop)}
                    />
                ) : (
                    <FailStop className={cn(cls.fail_stop)} />
                )}
            </div>
        </ModalBase>
    );
};

export { HomeAdvertisementStopModal };
