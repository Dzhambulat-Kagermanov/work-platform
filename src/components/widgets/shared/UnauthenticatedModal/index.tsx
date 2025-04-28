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
                <div className={cls.authOptions}>
                    <AuthForm
                        noRedirectOnSuccess
                        withoutErrorToast
                        onSuccess={() => {
                            hideModal({ slug: UNAUTHENTICATED_MODAL });
                        }}
                    />
                    <button 
                        className={cls.registrationButton}
                        onClick={() => {
                            // Close current modal and open registration
                            hideModal({ slug: UNAUTHENTICATED_MODAL });
                            // Navigate to registration page or trigger registration modal
                            window.location.href = '/auth/register';
                        }}
                    >
                        Регистрация
                    </button>
                </div>
            </div>
        </ModalBase>
    );
};

export { UnauthenticatedModal };
