"use client";
import { ButtonHTMLAttributes, FC } from "react";
import { cn } from "@/lib";
import Image from "next/image";
import cls from "./index.module.scss";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

const ViewChatSendMessage: FC<Props> = ({ className, ...props }) => {
    return (
        <button {...props} className={cn(cls.btn, [className])}>
            <Image
                src={"/images/delivery/send.svg"}
                alt="Отправить"
                width={20}
                height={20}
                className={cn(cls.icon)}
            />
        </button>
    );
};

export { ViewChatSendMessage };
