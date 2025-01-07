"use client";
import { FC, MouseEventHandler } from "react";
import { TClassName } from "@/types";
import { Button, ModalBase, Typography } from "@/components/ui";
import { cn } from "@/lib";
import {
    SALESMAN_EDIT_ADVERTISEMENT_LIMIT_LOW,
    SALESMAN_EDIT_ADVERTISEMENT_LIMIT_UP,
} from "@/constants";
import { useModalStore } from "@/store";
import cls from "./index.module.scss";

interface Props extends TClassName {}
const EditAdvertisementLimitUp: FC<Props> = ({ className }) => {
    const hideModal = useModalStore((state) => state.hideModal);
    const showModal = useModalStore((state) => state.showModal);
    const handleConfirm: MouseEventHandler = () => {
        hideModal({ slug: SALESMAN_EDIT_ADVERTISEMENT_LIMIT_UP });
        showModal({ slug: SALESMAN_EDIT_ADVERTISEMENT_LIMIT_LOW });
    };

    return (
        <ModalBase
            slug={SALESMAN_EDIT_ADVERTISEMENT_LIMIT_UP}
            className={cn(cls.wrapper, [className])}
        >
            <div className={cn(cls.content)}>
                <Typography font="Inter-SB" size={18} tag="h2">
                    Лимит выкупов повышен
                </Typography>
                <Typography font="Inter-R" size={14} tag="h3">
                    Объявление пополнено на 4800 ₽.
                    <br />
                    Добавлено выкупов: 5 шт.
                </Typography>
                <Button
                    theme="fill"
                    size="mid"
                    wFull
                    className={cn(cls.btn)}
                    onClick={handleConfirm}
                >
                    Понятно
                </Button>
            </div>
        </ModalBase>
    );
};

export { EditAdvertisementLimitUp };
