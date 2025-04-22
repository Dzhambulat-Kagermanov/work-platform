"use client";
import { ButtonHTMLAttributes, FC } from "react";
import { cn } from "@/lib";
import Image from "next/image";
import cls from "./index.module.scss";
import { PageLoader } from "@/components/ui/loaders";
import { twMerge } from "tailwind-merge";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    isSending?: boolean;
}

const ViewChatSendMessage: FC<Props> = ({ className, isSending, ...props }) => {
    return (
        <button {...props} className={cn(cls.btn, [className])}>
            <Image
                src={"/images/delivery/send.svg"}
                alt="Отправить"
                width={20}
                height={20}
                className={cn(cls.icon)}
            />
            {isSending ? (
                <PageLoader
                    className={twMerge(
                        "text-white min-h-[auto] w-[90%] h-[90%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute",
                    )}
                />
            ) : null}
        </button>
    );
};

export { ViewChatSendMessage };
