"use client";
import { FC } from "react";
import { TClassName } from "@/types";
import { cn } from "@/lib";
import Image from "next/image";
import { Typography } from "@/components/ui";
import cls from "./index.module.scss";

interface Props extends TClassName {}
const SignFormTelegram: FC<Props> = ({ className }) => {
    return (
        <button className={cn(cls.btn, [className])}>
            <Image
                src={"/images/shared/social/telegram-original.svg"}
                alt="Telegram"
                width={24}
                height={24}
            />
            <Typography font="Inter-SB" size={16}>
                Войти через Telegram
            </Typography>
        </button>
    );
};

export { SignFormTelegram };
