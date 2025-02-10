import { FC } from "react";
import { TClassName } from "@/types";
import { cn } from "@/lib";
import Image from "next/image";
import { Button, Typography } from "@/components/ui";
import cls from "./index.module.scss";

interface Props extends TClassName {
    onClick: () => void;
}
const FailStop: FC<Props> = ({ className, onClick }) => {
    return (
        <div className={cn(cls.wrapper, [className])}>
            <Image
                src="/images/salesman/home/action-impossible.svg"
                alt="Невозможное действие"
                width={48}
                height={48}
            />
            <Typography font="Inter-SB" size={18} tag="h2">
                Невозможно запустить объявление
            </Typography>
            <Typography font="Inter-R" size={14} tag="h5">
                Товар может иметь только одно активное объявление.
            </Typography>
            <Button
                size="mid"
                theme="fill"
                className={cn(cls.btn)}
                wFull
                onClick={onClick}
            >
                Понятно
            </Button>
        </div>
    );
};

export { FailStop };
