"use client";
import { FC, MouseEventHandler } from "react";
import { TClassName } from "@/types";
import { cn } from "@/lib";
import { Button, Typography } from "@/components/ui";
import { useModalStore } from "@/store";
import {
    SALESMAN_CREATE_ADVERTISEMENT_CANCEL_MODAL,
    SALESMAN_CREATE_ADVERTISEMENT_PUBLISH_MODAL,
} from "@/constants";
import cls from "./index.module.scss";

interface Props extends TClassName {}
const CreateAdvertisementResult: FC<Props> = ({ className }) => {
    const showModal = useModalStore((state) => state.showModal);
    const handleCancel: MouseEventHandler = () => {
        showModal({ slug: SALESMAN_CREATE_ADVERTISEMENT_CANCEL_MODAL });
    };
    const handlePublish: MouseEventHandler = () => {
        showModal({ slug: SALESMAN_CREATE_ADVERTISEMENT_PUBLISH_MODAL });
    };

    return (
        <section className={cn(cls.wrapper, [className])}>
            <Typography font="Inter-SB" size={20} tag="h2">
                Итого: <span>0 ₽</span>
            </Typography>
            <div className={cn(cls.content)}>
                <Typography font="Inter-R" size={12}>
                    Выкупов: <span>0 шт.</span>
                </Typography>
                <Typography font="Inter-R" size={12}>
                    Кэшбек для покупателя: <span>0шт. * 0₽ = 0₽</span>
                </Typography>
                <Typography font="Inter-R" size={12}>
                    Оплата выкупов: <span>0 шт * 95₽ = 0₽</span>
                </Typography>
            </div>
            <div className={cn(cls.actions)}>
                <Button
                    size="mid"
                    theme="outline"
                    className={cn(cls.btn)}
                    onClick={handleCancel}
                >
                    Отмена
                </Button>
                <Button
                    size="mid"
                    theme="fill"
                    className={cn(cls.btn)}
                    onClick={handlePublish}
                >
                    Опубликовать
                </Button>
            </div>
        </section>
    );
};

export { CreateAdvertisementResult };
