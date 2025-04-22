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
import {
    getSendBuyerFilesSelector,
    getSendSalesmanFilesSelector,
    resetSendBuyerFilesSelector,
    resetSendSalesmanFilesSelector,
    sendBuyerFilesSelector,
    sendSalesmanFilesSelector,
    useChat,
} from "@/store/useChat";
import toast from "react-hot-toast";
import { AxiosError } from "axios";

interface Props extends TClassName {
    activeId?: number;
    role: TRole;
}
const ActionsArea: FC<Props> = ({ className, activeId, role }) => {
    const queryClient = useQueryClient();
    const files = useChat(
        role === "buyer" ? sendBuyerFilesSelector : sendSalesmanFilesSelector,
    );
    const filesBlob = useChat(
        role === "buyer"
            ? getSendBuyerFilesSelector
            : getSendSalesmanFilesSelector,
    )();
    const [message, setMessage] = useState<string>("");
    const sendMessage = useSendMessageMutation(activeId);
    const resetFiles = useChat(
        role === "buyer"
            ? resetSendBuyerFilesSelector
            : resetSendSalesmanFilesSelector,
    );
    if (!activeId) return null;

    const handleSubmit: FormEventHandler = (event) => {
        event.preventDefault();
        const formData = new FormData();
        if (message) formData.append("text", message);
        if (filesBlob?.length) {
            filesBlob.forEach((blob) => {
                formData.append("files[]", blob.data);
            });
        }
        if (Array.from(formData.entries()).length) {
            sendMessage.mutate(
                { chatId: activeId, formData },
                {
                    onError: (err) => {
                        const error = err as AxiosError<{ message: string }>;

                        toast.error(error.response?.data.message as string);
                    },
                    onSettled: () => {
                        queryClient.invalidateQueries({
                            queryKey: GET_CHAT_STATUSES_KEY,
                        });
                        setMessage("");
                    },
                    onSuccess: () => {
                        resetFiles();
                    },
                },
            );
        }
    };

    return (
        <form className={cn(cls.wrapper, [className])} onSubmit={handleSubmit}>
            <ViewChatPlus className={cn(cls.plus_btn)} role={role} />
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
                isSending={sendMessage.isPending}
                className={cn(cls.send_btn)}
                disabled={
                    (!message && !filesBlob?.length) || sendMessage.isPending
                }
            />
        </form>
    );
};

export { ActionsArea };
