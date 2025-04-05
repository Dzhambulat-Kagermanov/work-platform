import { FC, MouseEventHandler } from "react";
import { TClassName } from "@/types";
import { Button, ModalBase, Typography } from "@/components/ui";
import { SALESMAN_CREATE_ADVERTISEMENT_CANCEL_MODAL } from "@/constants";
import { cn } from "@/lib";
import cls from "./index.module.scss";
import { useModalStore } from "@/store";
import { useRouter } from "next/navigation";

interface Props extends TClassName {}
const CreateAdvertisementCancelModal: FC<Props> = ({ className }) => {
    const router = useRouter();
    const hideModal = useModalStore((state) => state.hideModal);
    const handleCancel: MouseEventHandler = () => {
        hideModal({ slug: SALESMAN_CREATE_ADVERTISEMENT_CANCEL_MODAL });
    };
    const handleConfirm: MouseEventHandler = () => {
        router.push("/salesman?homePageType=advertisement");
    };

    return (
        <ModalBase
            slug={SALESMAN_CREATE_ADVERTISEMENT_CANCEL_MODAL}
            className={cn(cls.wrapper, [className])}
        >
            <div className={cn(cls.content)}>
                <Typography font="Inter-SB" size={18} tag="h2">
                    Отменить создание объявления
                </Typography>
                <Typography font="Inter-R" size={14} tag="h3">
                    Вы уверены что хотите отменить создание объявления?
                </Typography>
                <div className={cn(cls.actions)}>
                    <Button
                        size="mid"
                        className={cn(cls.btn)}
                        theme="cancel"
                        onClick={handleCancel}
                    >
                        Отмена
                    </Button>
                    <Button
                        size="mid"
                        className={cn(cls.btn)}
                        theme="fill"
                        onClick={handleConfirm}
                    >
                        Подтвердить
                    </Button>
                </div>
            </div>
        </ModalBase>
    );
};

export { CreateAdvertisementCancelModal };
