"use client";
import { FC } from "react";
import { TClassName } from "@/types";
import { cn } from "@/lib";
import Image from "next/image";
import cls from "./index.module.scss";
import { sendMessage } from "@/actions/message.action";

interface Props extends TClassName {
    message?: string;
}
const ViewChatSendMessage: FC<Props> = ({ className, message }) => {
    const handleSendMessage = async () => {
        // await sendMessage(message || "");
    };

    return (
        <button
            className={cn(cls.btn, [className])}
            onClick={handleSendMessage}
        >
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
