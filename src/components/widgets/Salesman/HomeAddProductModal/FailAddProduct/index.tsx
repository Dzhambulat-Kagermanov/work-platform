import { FC, MouseEventHandler } from "react";
import { TClassName, TState } from "@/types";
import { cn } from "@/lib";
import { TModalStep } from "..";
import Image from "next/image";
import { Button, Input, Typography } from "@/components/ui";
import cls from "./index.module.scss";
import { SALESMAN_ADD_PRODUCT_MODAL } from "@/constants";
import { useModalStore } from "@/store";

interface Props extends TClassName {
    setStep: TState<TModalStep>;
    closeModal: () => void;
}
const FailAddProduct: FC<Props> = ({ className, closeModal, setStep }) => {
    const hideModal = useModalStore((state) => state.hideModal);
    const handleCancelClick: MouseEventHandler = () => {
        hideModal({ slug: SALESMAN_ADD_PRODUCT_MODAL });
    };
    const handleConfirmClick: MouseEventHandler = () => {
        setStep("addShop");
    };
    return (
        <div className={cn(cls.wrapper, [className])}>
            <Image
                src="/images/salesman/home/add-product-fail.svg"
                alt="Не получилось"
                width={48}
                height={48}
            />
            <Typography font="Inter-SB" size={18} tag="h2">
                Не получилось добавить товар
            </Typography>
            <Typography font="Inter-M" size={14} tag="h3">
                Этот товар принадлежит другому продавцу. Введите артикул товара
                из вашего магазина.
                <br />
                <br />
                Если это ваш товар и произошла ошибка, свяжитесь с нами
            </Typography>
            <Input
                label="Артикул:"
                wrapperCls={cn(cls.inp_wrapper)}
                labelCls={cn(cls.inp_label)}
            />
            <div className={cn(cls.actions)}>
                <Button
                    size="mid"
                    onClick={handleCancelClick}
                    theme="outline"
                    className={cn(cls.btn, [cls.cancel_btn])}
                >
                    Отмена
                </Button>
                <Button
                    size="mid"
                    onClick={handleConfirmClick}
                    theme="fill"
                    className={cn(cls.btn, [cls.cancel_btn])}
                >
                    Подтвердить
                </Button>
            </div>
        </div>
    );
};

export { FailAddProduct };
