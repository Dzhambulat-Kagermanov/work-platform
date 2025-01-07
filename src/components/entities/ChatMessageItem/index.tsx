import { FC } from "react";
import { TChatMessageItemProps, TClassName, TTag } from "@/types";
import { cn } from "@/lib";
import { ChatAvatarItem } from "../ChatAvatarItem";
import { Typography } from "@/components/ui";
import cls from "./index.module.scss";

interface Props extends TClassName, TTag, TChatMessageItemProps {
    whomSend: "user" | "salesman";
    isOnline: boolean;
    messageCls?: string;
    whoReading: "reading-user" | "reading-salesman";
}
const ChatMessageItem: FC<Props> = ({
    id,
    className,
    messageCls,
    isOnline,
    avatar,
    message,
    messageGotTime,
    name,
    whomSend,
    whoReading,
    tag = "div",
}) => {
    const Tag = tag;

    return (
        <Tag
            className={cn(cls.item, [
                className,
                cls[whomSend],
                cls[whoReading],
            ])}
        >
            <ChatAvatarItem
                className={cn(cls.avatar)}
                avatar={avatar}
                isOnline={isOnline}
            />
            <div className={cn(cls.message)}>
                <div className={cn(cls.head)}>
                    <Typography font="Inter-M" size={14} tag="h3">
                        {name}
                    </Typography>
                    <Typography font="Inter-R" size={12} tag="time">
                        {messageGotTime}
                    </Typography>
                </div>
                <div className={cn(cls.content)}>
                    <Typography
                        font="Inter-M"
                        size={16}
                        className={cn(cls.message, [messageCls])}
                    >
                        {message}
                    </Typography>
                </div>
            </div>
        </Tag>
    );
};

export { ChatMessageItem };
