import { FC, memo } from "react";
import { TClassName } from "@/types";
import { cn } from "@/lib";
import { Typography } from "@/components/ui";
import { ChatMessageItem } from "@/components/entities/ChatMessageItem";
import { MessagesAreaReviewCreating } from "../MessagesAreaReviewCreating";
import { MessagesAreaActionType } from "../MessagesAreaActionType";
import { MessagesAreaReview } from "../MessagesAreaReview";
import { TViewChatMessageGroupProps } from "@/types/salesman/chat";
import { ChatUploadFilesItem } from "@/components/entities/MessagesAreaUploadFiles";
import cls from "./index.module.scss";
import React from "react";
import { dateParserHandler } from "@/handlers";
import { useSessionQuery } from "@/hooks/api/auth";
import {
    buyerAvatarSelector,
    salesmanAvatarSelector,
    useChat,
} from "@/store/useChat";

interface Props extends TClassName, TViewChatMessageGroupProps {
    userIsOnline: boolean;
}
const MessagesAreaGroup: FC<Props> = memo(
    ({ date, className, messages, userIsOnline }) => {
        const { data: userData } = useSessionQuery();
        const role = userData?.role.slug;

        const buyerAvatar = useChat(buyerAvatarSelector);
        const salesmanAvatar = useChat(salesmanAvatarSelector);

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
                    {messages.map((item, idx) => {
                        // if (type === "user" || type === "salesman")
                        //     return (
                        //         <ChatMessageItem
                        //             whoReading="reading-salesman"
                        //             tag="li"
                        //             id={message.id}
                        //             key={message.id}
                        //             avatar={message.avatar}
                        //             className={cn(cls.item)}
                        //             message={message.message}
                        //             messageCls={cn(cls.item_message)}
                        //             messageGotTime={message.messageGotTime}
                        //             name={type === "salesman" ? "Вы" : message.name}
                        //             isOnline={type === "salesman" || userIsOnline}
                        //             whomSend={
                        //                 type === "salesman" ? "salesman" : "user"
                        //             }
                        //         />
                        //     );
                        // if (type === "confirm-action" || type === "fail-action")
                        //     return (
                        //         <MessagesAreaActionType
                        //             key={idx + "/"}
                        //             tag="li"
                        //             className={cn(cls.action)}
                        //             type={type}
                        //             message={message}
                        //         />
                        //     );
                        // if (type === "review")
                        //     return (
                        //         <MessagesAreaReview
                        //             key={idx + "/"}
                        //             message={message}
                        //             type={type}
                        //             className={cn(cls.review)}
                        //             tag="li"
                        //         />
                        //     );
                        // if (type === "review-creating")
                        //     return (
                        //         <MessagesAreaReviewCreating
                        //             key={idx + "/"}
                        //             tag="li"
                        //             className={cn(cls.review_creating)}
                        //         />
                        //     );

                        // if (type === "uploaded-file") {
                        //     return (
                        //         <ChatUploadFilesItem
                        //             whoReading="reading-salesman"
                        //             className={cn(cls.item, [cls.upload_files])}
                        //             message={message}
                        //             key={idx + "/"}
                        //             type="uploaded-file"
                        //             userIsOnline={userIsOnline}
                        //         />
                        //     );
                        // }
                        return (
                            <React.Fragment key={idx}>
                                {(() => {
                                    if (item.type === "text") {
                                        return (
                                            <ChatMessageItem
                                                whoReading={"reading-salesman"}
                                                tag="li"
                                                id={item.id}
                                                avatar={
                                                    item.whoSend === "buyer"
                                                        ? buyerAvatar || ""
                                                        : salesmanAvatar || ""
                                                }
                                                className={cn(cls.item)}
                                                message={item.text}
                                                messageCls={cn(
                                                    cls.item_message,
                                                )}
                                                messageGotTime={dateParserHandler(
                                                    item.created_at,
                                                )}
                                                name={""}
                                                isOnline={false}
                                                whomSend={
                                                    item.whoSend === "buyer"
                                                        ? "salesman"
                                                        : "user"
                                                }
                                            />
                                        );
                                    }
                                })()}
                            </React.Fragment>
                        );
                    })}
                </ul>
            </div>
        );
    },
);

export { MessagesAreaGroup };
