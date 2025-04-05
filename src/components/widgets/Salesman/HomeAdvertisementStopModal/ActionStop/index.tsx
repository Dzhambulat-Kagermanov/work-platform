import { FC, MouseEventHandler } from "react";
import { TClassName, TState } from "@/types";
import { cn } from "@/lib";
import { Button, Typography } from "@/components/ui";
import { useModalStore } from "@/store";
import { TModalStep } from "..";
import { SALESMAN_ADVERTISEMENT_STOP_MODAL } from "@/constants";
import cls from "./index.module.scss";

interface Props extends TClassName {
    setStep: TState<TModalStep>;
}
const ActionStop: FC<Props> = ({ className, setStep }) => {
    const hideModal = useModalStore((state) => state.hideModal);

    const handleUpLimits: MouseEventHandler = () => {
        setStep("fail-stop");
    };
    const handleConfirm: MouseEventHandler = () => {
        hideModal({ slug: SALESMAN_ADVERTISEMENT_STOP_MODAL });
    };

    return (
        <div className={cn(cls.wrapper, [className])}>
            <Typography font="Inter-SB" size={18} tag="h2">
                Обьявление было остановлено
            </Typography>
            <Typography font="Inter-R" size={14} tag="h4">
                Достигнут лимит выкупов. Чтобы запустить объявление заново -
                пополните его баланс.
            </Typography>
            <div className={cn(cls.actions)}>
                <Button
                    size="mid"
                    theme="outline"
                    className={cn(cls.btn)}
                    onClick={handleConfirm}
                >
                    Понятно
                </Button>
                <Button
                    size="mid"
                    theme="fill"
                    className={cn(cls.btn)}
                    onClick={handleUpLimits}
                >
                    Повысить лимит
                </Button>
            </div>
        </div>
    );
};

export { ActionStop };
