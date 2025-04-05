import { FC, memo, MouseEventHandler, useState } from "react";
import { TClassName, TNotificationItemProps, TTag } from "@/types";
import { cn } from "@/lib";
import { Typography } from "@/components/ui";
import cls from "./index.module.scss";
import { PlusIcon } from "@/icons";
import { TRAN_MID } from "@/constants";
import { title } from "process";
import { dateParserHandler } from "@/handlers";

interface Props extends TClassName, TTag, TNotificationItemProps {
    type: "forMenu" | "forOverlay";
    // Если type === 'forOverlay'
    deleteNotification?: (id: number) => void;
    isHiddenCls?: string;
    ///////////////////////
}
const NotificationItem: FC<Props> = memo(
    ({
        className,
        created_at,
        text,
        buyback_id,
        is_read,
        updated_at,
        user_id,
        tag = "div",
        type,
        id,
        deleteNotification,
        isHiddenCls,
    }) => {
        const [tranState, setTranState] = useState<boolean>(true);
        const handleClose: MouseEventHandler = (e) => {
            setTranState(false);
            if (deleteNotification)
                setTimeout(() => {
                    deleteNotification(id);
                }, TRAN_MID);
        };
        const Tag = tag;
        return (
            <Tag
                className={cn(cls.overlay, [className, cls[type]], {
                    [cls.isHidden]: !tranState,
                    [isHiddenCls as string]: !tranState && !!isHiddenCls,
                })}
            >
                <div className={cn(cls.wrapper)}>
                    <div className={cn(cls.content)}>
                        <div className={cn(cls.head)}>
                            <Typography font="Inter-SB" size={14} tag="h2">
                                {title}
                            </Typography>
                            {type === "forOverlay" && (
                                <button
                                    onClick={handleClose}
                                    className={cn(cls.close_btn)}
                                >
                                    <PlusIcon color="var(--grey-100)" />
                                </button>
                            )}
                        </div>
                        <Typography font="Inter-R" size={12} tag="h3">
                            {text}
                        </Typography>
                        {type === "forMenu" && (
                            <Typography font="Inter-R" size={12} tag="time">
                                {dateParserHandler(created_at)}
                            </Typography>
                        )}
                    </div>
                </div>
            </Tag>
        );
    },
);

export { NotificationItem };
