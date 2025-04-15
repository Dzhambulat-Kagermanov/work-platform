"use client";
import { FC, FormEventHandler, useState } from "react";
import { cn } from "@/lib";
import { TClassName } from "@/types";
import { ViewChatPlus } from "@/components/features/ViewChatPlus";
import { Input } from "@/components/ui";
import { ViewChatSendMessage } from "@/components/features/ViewChatSendMessage";
import cls from "./index.module.scss";
import useSendMessageMutation from "@/hooks/api/chat/useSendMessageMutation";
import { TRole } from "..";
import { useQueryClient } from "@tanstack/react-query";
import { GET_CHAT_STATUSES_KEY } from "@/hooks/api/chat/useGetChatStatusesQuery";

interface Props extends TClassName {
    activeId?: number;
    role: TRole;
}
const ActionsArea: FC<Props> = ({ className, activeId, role }) => {
    const queryClient = useQueryClient();
    const [message, setMessage] = useState<string>("");

    const formData = new FormData();
    formData.append("text", message);

    const sendMessage = useSendMessageMutation(activeId);

    if (!activeId) return null;

    const handleSubmit: FormEventHandler = (event) => {
        event.preventDefault();
        sendMessage.mutate(
            { chatId: activeId, formData },
            {
                onSettled: () => {
                    queryClient.invalidateQueries({
                        queryKey: GET_CHAT_STATUSES_KEY,
                    });
                    setMessage("");
                },
            },
        );
    };

    return (
        <form className={cn(cls.wrapper, [className])} onSubmit={handleSubmit}>
            <ViewChatPlus className={cn(cls.plus_btn)} />
            <Input
                contentCls={cls.inp_content}
                value={message}
                wrapperCls={cn(cls.inp_wrapper)}
                inpCls={cn(cls.inp)}
                placeholder="Написать сообщение"
                onChange={(event) => {
                    setMessage(event.target.value);
                }}
            />
            <ViewChatSendMessage
                className={cn(cls.send_btn)}
                disabled={!message}
            />
        </form>
    );
};

export { ActionsArea };
