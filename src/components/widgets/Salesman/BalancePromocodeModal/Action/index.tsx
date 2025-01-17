import { FC, MouseEventHandler, useState } from "react";
import { TClassName, TState } from "@/types";
import { cn } from "@/lib";
import { Typography, Input, Button } from "@/components/ui";
import { SALESMAN_BALANCE_PROMOCODE_MODAL } from "@/constants";
import { useModalStore } from "@/store";
import cls from "./index.module.scss";

interface Props extends TClassName {
    error?: string;
    onSubmit: (value: string) => void;
    disabledClose?: boolean;
}
const Action: FC<Props> = ({ className, error, onSubmit, disabledClose }) => {
    const [promocode, setPromocode] = useState("");
    const hideModal = useModalStore((state) => state.hideModal);
    const handleCancel: MouseEventHandler = () => {
        hideModal({ slug: SALESMAN_BALANCE_PROMOCODE_MODAL });
    };
    return (
        <div className={cn(cls.wrapper, [className])}>
            <Typography font="Inter-SB" size={18} tag="h2">
                Введите промокод
            </Typography>
            <Input
                error={error}
                value={promocode}
                onChange={(e) => setPromocode(e.target.value.trim())}
                wrapperCls={cn(cls.inp_wrapper)}
            />
            <div className={cn(cls.actions)}>
                <Button
                    size="mid"
                    theme="fill"
                    className={cn(cls.btn)}
                    onClick={() => onSubmit(promocode)}
                    disabled={!promocode || disabledClose}
                >
                    Подтвердить
                </Button>
                <Button
                    size="mid"
                    theme="outline"
                    className={cn(cls.btn)}
                    disabled={disabledClose}
                    onClick={handleCancel}
                >
                    Отмена
                </Button>
            </div>
        </div>
    );
};

export { Action };
