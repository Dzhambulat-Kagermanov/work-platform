import { FC, MouseEventHandler } from "react";
import { TClassName } from "@/types";
import { Button, ModalBase, Typography } from "@/components/ui";
import { cn } from "@/lib";
import { SALESMAN_EDIT_ADVERTISEMENT_LIMIT_LOW } from "@/constants";
import { useModalStore } from "@/store";
import cls from "./index.module.scss";

interface Props extends TClassName {}
const EditAdvertisementLimitLow: FC<Props> = ({ className }) => {
    const hideModal = useModalStore((state) => state.hideModal);
    const handleConfirm: MouseEventHandler = () => {
        hideModal({ slug: SALESMAN_EDIT_ADVERTISEMENT_LIMIT_LOW });
    };

    return (
        <ModalBase
            slug={SALESMAN_EDIT_ADVERTISEMENT_LIMIT_LOW}
            className={cn(cls.wrapper, [className])}
        >
            <div className={cn(cls.content)}>
                <Typography font="Inter-SB" size={18} tag="h2">
                    Лимит выкупов понижен
                </Typography>
                <Typography font="Inter-R" size={14} tag="h3">
                    На основной баланс возвращено 4800 ₽.
                    <br />
                    Убавлено выкупов: 5 шт.
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

export { EditAdvertisementLimitLow };
