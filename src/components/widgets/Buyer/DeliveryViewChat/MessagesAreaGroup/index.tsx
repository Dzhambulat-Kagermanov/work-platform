import { FC } from "react";
import { TViewChatMessageGroupProps } from "@/types/buyer/chat";
import { cn } from "@/lib";
import { Typography } from "@/components/ui";
import { ChatMessageItem } from "@/components/entities/ChatMessageItem";
import { MessagesAreaReviewCreating } from "../MessagesAreaReviewCreating";
import { MessagesAreaActionType } from "../MessagesAreaActionType";
import { MessagesAreaReview } from "../MessagesAreaReview";
import cls from "./index.module.scss";
import { MessagesAreaUploadForm } from "../MessagesAreaUploadForm";
import { TClassName } from "@/types";
import { ChatUploadFilesItem } from "@/components/entities/MessagesAreaUploadFiles";

interface Props extends TClassName, TViewChatMessageGroupProps {
    salesmanIsOnline: boolean;
}
const MessagesAreaGroup: FC<Props> = ({
    date,
    className,
    messages,
    salesmanIsOnline,
}) => {
    return (
        <div className={cn(cls.wrapper, [className])}>
            <Typography
                font="Inter-SB"
                tag="time"
                size={14}
                className={cn(cls.date)}
            >
                {date}
            </Typography>
            <ul className={cn(cls.group)}>
                {messages.map(({ message, type }, idx) => {
                    if (type === "user" || type === "salesman")
                        return (
                            <ChatMessageItem
                                whoReading="reading-user"
                                tag="li"
                                id={message.id}
                                key={message.id}
                                avatar={message.avatar}
                                className={cn(cls.item)}
                                message={message.message}
                                messageCls={cn(cls.item_message)}
                                messageGotTime={message.messageGotTime}
                                name={type === "user" ? "Вы" : message.name}
                                isOnline={type === "user" || salesmanIsOnline}
                                whomSend={
                                    type === "salesman" ? "salesman" : "user"
                                }
                            />
                        );
                    if (type === "confirm-action" || type === "fail-action")
                        return (
                            <MessagesAreaActionType
                                key={idx + "/"}
                                tag="li"
                                className={cn(cls.action)}
                                type={type}
                                message={message}
                            />
                        );
                    if (type === "review")
                        return (
                            <MessagesAreaReview
                                key={idx + "/"}
                                message={message}
                                type={type}
                                className={cn(cls.review)}
                                tag="li"
                            />
                        );
                    if (type === "review-creating")
                        return (
                            <MessagesAreaReviewCreating
                                key={idx + "/"}
                                tag="li"
                                className={cn(cls.review_creating)}
                            />
                        );
                    if (type === "upload-form")
                        return (
                            <MessagesAreaUploadForm
                                className={cn(cls.form)}
                                key={idx + "/"}
                            />
                        );
                    if (type === "uploaded-file") {
                        return (
                            <ChatUploadFilesItem
                                whoReading="reading-user"
                                className={cn(cls.item, [cls.upload_files])}
                                message={message}
                                key={idx + "/"}
                                type="uploaded-file"
                                userIsOnline={salesmanIsOnline}
                            />
                        );
                    }
                })}
            </ul>
        </div>
    );
};

export { MessagesAreaGroup };
