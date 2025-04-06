"use client";
import { FC, FormEventHandler, MouseEventHandler, useState } from "react";
import { cn } from "@/lib";
import { TClassName } from "@/types";
import { ViewChatPlus } from "@/components/features/ViewChatPlus";
import { Input } from "@/components/ui";
import { ViewChatSendMessage } from "@/components/features/ViewChatSendMessage";
import cls from "./index.module.scss";
import useSendMessageMutation from "@/hooks/api/chat/useSendMessageMutation";
import { TRole } from "..";

interface Props extends TClassName {
    activeId?: number;
    role: TRole;
}
const ActionsArea: FC<Props> = ({ className, activeId, role }) => {
    if (!activeId) return null;

    const [message, setMessage] = useState<string>("");

    const formData = new FormData();
    formData.append("text", message);

    const sendMessage = useSendMessageMutation(activeId);

    const handleSubmit: FormEventHandler = (event) => {
        event.preventDefault();
        sendMessage.mutate(
            { chatId: activeId, formData },
            {
                onSettled: () => {
                    setMessage("");
                },
            },
        );
    };

    return (
        <form className={cn(cls.wrapper, [className])} onSubmit={handleSubmit}>
            <ViewChatPlus className={cn(cls.plus_btn)} />
            <Input
                value={message}
                wrapperCls={cn(cls.inp_wrapper)}
                inpCls={cn(cls.inp)}
                placeholder="Написать сообщение"
                onChange={(event) => {
                    setMessage(event.target.value);
                }}
            />
            <ViewChatSendMessage className={cn(cls.send_btn)} />
        </form>
    );
};

export { ActionsArea };
