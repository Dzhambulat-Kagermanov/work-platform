import { FC, MouseEventHandler } from "react";
import { TClassName } from "@/types";
import { cn } from "@/lib";
import Image from "next/image";
import { Typography } from "@/components/ui";
import cls from "./index.module.scss";

interface Props extends TClassName {}
const Button: FC<Props> = ({ className }) => {
    const handleClick: MouseEventHandler = () => {};

    return (
        <button className={cn(cls.button, [className])} onClick={handleClick}>
            <Image
                src={"/images/shared/social/telegram-original.svg"}
                alt="Telegram"
                width={24}
                height={24}
            />
            <Typography font="Inter-SB" size={16}>
                Поддержка
            </Typography>
        </button>
    );
};

export { Button };
