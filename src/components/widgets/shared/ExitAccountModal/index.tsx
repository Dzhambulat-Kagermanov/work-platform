"use client";
import { FC, MouseEventHandler } from "react";
import { TClassName } from "@/types";
import { Button, ModalBase, Typography } from "@/components/ui";
import { authTokenKey, EXIT_ACCOUNT_MODAL, ROUTES } from "@/constants";
import { cn } from "@/lib";
import { useModalStore } from "@/store";
import cls from "./index.module.scss";
import { useQueryClient } from "@tanstack/react-query";
import { sessionQueryKeys } from "@/hooks/api/auth/useSessionQuery";
import { useRouter } from "next/navigation";

interface Props extends TClassName {}
const ExitAccountModal: FC<Props> = ({ className }) => {
    const router = useRouter();
    const queryClient = useQueryClient();
    const hideModal = useModalStore((state) => state.hideModal);
    const handleClick: MouseEventHandler = () => {
        localStorage.removeItem(authTokenKey);
        router.push(ROUTES.MAIN);
        queryClient.setQueriesData({ queryKey: sessionQueryKeys }, null);
        hideModal({ slug: EXIT_ACCOUNT_MODAL });
    };

    return (
        <ModalBase
            slug={EXIT_ACCOUNT_MODAL}
            className={cn(cls.wrapper, [className])}
        >
            <div className={cn(cls.content)}>
                <Typography font="Inter-SB" size={18} tag="h2">
                    Выйти из аккаунта?
                </Typography>
                <div className={cn(cls.actions)}>
                    <Button theme="fill" onClick={handleClick} size="mid" wFull>
                        Подтвердить
                    </Button>
                    <Button
                        theme="cancel"
                        onClick={handleClick}
                        size="mid"
                        wFull
                    >
                        Отмена
                    </Button>
                </div>
            </div>
        </ModalBase>
    );
};

export { ExitAccountModal };
