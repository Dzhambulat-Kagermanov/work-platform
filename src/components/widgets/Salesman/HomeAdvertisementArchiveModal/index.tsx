"use client";
import { FC, useState } from "react";
import { TClassName } from "@/types";
import { ModalBase } from "@/components/ui";
import { SALESMAN_ADVERTISEMENT_ARCHIVE_MODAL } from "@/constants";
import { cn } from "@/lib";
import { ActionArchive } from "./ActionArchive";
import { FailArchive } from "./FailArchive";
import { SuccessArchive } from "./SuccessArchive";
import cls from "./index.module.scss";

export type TModalStep = "action-archive" | "fail-archive" | "success-archive";

interface Props extends TClassName {}
const HomeAdvertisementArchiveModal: FC<Props> = ({ className }) => {
    const [step, setStep] = useState<TModalStep>("action-archive");

    return (
        <ModalBase
            slug={SALESMAN_ADVERTISEMENT_ARCHIVE_MODAL}
            className={cn(cls.wrapper, [className])}
            onClose={() => {
                setStep("action-archive");
            }}
        >
            <div className={cn(cls.content)}>
                {step === "action-archive" ? (
                    <ActionArchive
                        className={cn(cls.action_archive)}
                        setStep={setStep}
                    />
                ) : step === "success-archive" ? (
                    <SuccessArchive
                        className={cn(cls.success_archive)}
                    />
                ) : (
                    <FailArchive className={cn(cls.fail_archive)} />
                )}
            </div>
        </ModalBase>
    );
};

export { HomeAdvertisementArchiveModal };
