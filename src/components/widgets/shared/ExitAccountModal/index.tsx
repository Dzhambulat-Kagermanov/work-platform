"use client";
import { FC, MouseEventHandler } from "react";
import { TClassName } from "@/types";
import { Button, ModalBase, Typography } from "@/components/ui";
import { EXIT_ACCOUNT_MODAL } from "@/constants";
import { cn } from "@/lib";
import { useModalStore } from "@/store";
import cls from "./index.module.scss";

interface Props extends TClassName {}
const ExitAccountModal: FC<Props> = ({ className }) => {
    const hideModal = useModalStore((state) => state.hideModal);
    const handleClick: MouseEventHandler = () => {
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
