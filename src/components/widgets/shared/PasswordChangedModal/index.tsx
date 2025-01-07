"use client";
import { FC, MouseEventHandler } from "react";
import { TClassName } from "@/types";
import { Button, ModalBase, Typography } from "@/components/ui";
import { PASSWORD_CHANGED_MODAL } from "@/constants";
import { cn } from "@/lib";
import Image from "next/image";
import { useModalStore } from "@/store";
import cls from "./index.module.scss";

interface Props extends TClassName {}
const PasswordChangedModal: FC<Props> = ({ className }) => {
    const hideModal = useModalStore((state) => state.hideModal);
    const handleClick: MouseEventHandler = () => {
        hideModal({ slug: PASSWORD_CHANGED_MODAL });
    };

    return (
        <ModalBase
            slug={PASSWORD_CHANGED_MODAL}
            className={cn(cls.wrapper, [className])}
        >
            <div className={cn(cls.content)}>
                <Image
                    src={"/images/shared/actions/success.svg"}
                    alt="Успех"
                    width={48}
                    height={48}
                />
                <Typography font="Inter-SB" size={18} tag="h2">
                    Пароль успешно изменен
                </Typography>
                <Button theme="fill" onClick={handleClick} size="mid" wFull>
                    Готово
                </Button>
            </div>
        </ModalBase>
    );
};

export { PasswordChangedModal };
