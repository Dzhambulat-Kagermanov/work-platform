"use client";
import { FC } from "react";
import { TClassName } from "@/types";
import { ModalBase, Typography } from "@/components/ui";
import { UNAUTHENTICATED_MODAL } from "@/constants";
import { cn } from "@/lib";
import cls from "./index.module.scss";
import { AuthForm } from "@/components/auth-form";
import { useModalStore } from "@/store";
import { hideModalSelector } from "@/store/useModalStore";

interface Props extends TClassName {}

const UnauthenticatedModal: FC<Props> = ({ className }) => {
    const hideModal = useModalStore(hideModalSelector);

    return (
        <ModalBase
            slug={UNAUTHENTICATED_MODAL}
            className={cn(cls.main, [className])}
        >
            <div className={cls.content}>
                <Typography font="Inter-M" size={24} tag="h2">
                    Войти
                </Typography>
                <AuthForm
                    noRedirectOnSuccess
                    withoutErrorToast
                    onSuccess={() => {
                        hideModal({ slug: UNAUTHENTICATED_MODAL });
                    }}
                />
            </div>
        </ModalBase>
    );
};

export { UnauthenticatedModal };
