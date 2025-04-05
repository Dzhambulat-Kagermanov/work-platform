import { FC, MouseEventHandler } from "react";
import { TClassName, TState } from "@/types";
import { Typography, Button } from "@/components/ui";
import { cn } from "@/lib";
import Image from "next/image";
import { TModalStep } from "..";
import { useModalStore } from "@/store";
import { SALESMAN_RANSOMS_USER_UPLOAD_FILE_MODAL } from "@/constants";
import cls from "./index.module.scss";

interface Props extends TClassName {
    setStep: TState<TModalStep>;
}
const ActionContent: FC<Props> = ({ className, setStep }) => {
    const hideModal = useModalStore((state) => state.hideModal);
    const handleResolve: MouseEventHandler = () => {
        hideModal({ slug: SALESMAN_RANSOMS_USER_UPLOAD_FILE_MODAL });
    };
    const handleReject: MouseEventHandler = () => {
        setStep("reject");
    };

    return (
        <div className={cn(cls.wrapper, [className])}>
            <Image
                src={"/images/stub/file-load.png"}
                alt="Загруженный файл"
                width={310}
                height={180}
            />
            <Typography font="Inter-SB" size={18} tag="h2">
                Загруженный файл 1
            </Typography>
            <Typography font="Inter-R" size={14} tag="h3">
                Если это соответствует вашим условиям, нажмите “Принять”. Если
                нет - нажмите “Отклонить”
            </Typography>
            <div className={cn(cls.btns)}>
                <Button
                    theme="outline"
                    size="mid"
                    className={cn(cls.btn)}
                    onClick={handleReject}
                >
                    Отклонить
                </Button>
                <Button
                    theme="fill"
                    size="mid"
                    className={cn(cls.btn)}
                    onClick={handleResolve}
                >
                    Принять
                </Button>
            </div>
        </div>
    );
};

export { ActionContent };
