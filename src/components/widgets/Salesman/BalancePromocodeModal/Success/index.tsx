import { FC, MouseEventHandler } from "react";
import cls from "./index.module.scss";
import { TClassName } from "@/types";
import { cn } from "@/lib";
import { Typography, Button } from "@/components/ui";
import { SALESMAN_BALANCE_PROMOCODE_MODAL } from "@/constants";
import { useModalStore } from "@/store";

interface Props extends TClassName {}
const Success: FC<Props> = ({ className }) => {
    const hideModal = useModalStore((state) => state.hideModal);
    const handleConfirm: MouseEventHandler = () => {
        hideModal({ slug: SALESMAN_BALANCE_PROMOCODE_MODAL });
    };
    return (
        <div className={cn(cls.wrapper, [className])}>
            <Typography font="Inter-SB" size={18} tag="h2">
                Введите промокод
            </Typography>
            <Typography font="Inter-R" size={14} tag="h3">
                Вам начислены выкупы: 10 шт.
            </Typography>
            <Button
                wFull
                size="mid"
                theme="fill"
                className={cn(cls.btn)}
                onClick={handleConfirm}
            >
                Понятно
            </Button>
        </div>
    );
};

export { Success };
