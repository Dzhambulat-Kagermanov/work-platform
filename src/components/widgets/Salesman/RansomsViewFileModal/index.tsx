"use client";
import { FC, useState } from "react";
import { TClassName } from "@/types";
import { ModalBase } from "@/components/ui";
import { SALESMAN_RANSOMS_USER_UPLOAD_FILE_MODAL } from "@/constants";
import { cn } from "@/lib";
import { ActionContent } from "./ActionContent";
import { RejectContent } from "./RejectContent";
import cls from "./index.module.scss";

export type TModalStep = "action" | "reject";

interface Props extends TClassName {}
const RansomsViewFileModal: FC<Props> = ({ className }) => {
    const [step, setStep] = useState<TModalStep>("action");

    return (
        <ModalBase
            slug={SALESMAN_RANSOMS_USER_UPLOAD_FILE_MODAL}
            className={cn(cls.wrapper, [className])}
        >
            <div className={cn(cls.content)}>
                {step === "action" ? (
                    <ActionContent
                        className={cn(cls.action)}
                        setStep={setStep}
                    />
                ) : (
                    <RejectContent
                        className={cn(cls.reject)}
                        setStep={setStep}
                    />
                )}
            </div>
        </ModalBase>
    );
};

export { RansomsViewFileModal };
