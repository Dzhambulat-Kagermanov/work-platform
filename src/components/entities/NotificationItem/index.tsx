"use client";
import { FC, memo, MouseEventHandler, useState } from "react";
import { TClassName, TNotificationItemProps, TState, TTag } from "@/types";
import { cn } from "@/lib";
import { Typography } from "@/components/ui";
import cls from "./index.module.scss";
import { PlusIcon } from "@/icons";
import { TRAN_MID } from "@/constants";

interface Props extends TClassName, TTag, TNotificationItemProps {
    type: "forMenu" | "forOverlay";
    // Если type === 'forOverlay'
    setNotificationsState?: TState<TNotificationItemProps[]>;
    isHiddenCls?: string;
    ///////////////////////
}
const NotificationItem: FC<Props> = memo(
    ({
        className,
        date,
        subtitle,
        title,
        tag = "div",
        type,
        id,
        setNotificationsState,
        isHiddenCls,
    }) => {
        const [tranState, setTranState] = useState<boolean>(true);
        const handleClose: MouseEventHandler = (e) => {
            setTranState(false);
            if (setNotificationsState)
                setTimeout(() => {
                    setNotificationsState((cur) =>
                        cur.filter((params) => params.id !== id),
                    );
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
                            {subtitle}
                        </Typography>
                        {type === "forMenu" && (
                            <Typography font="Inter-R" size={12} tag="time">
                                {date}
                            </Typography>
                        )}
                    </div>
                </div>
            </Tag>
        );
    },
);

export { NotificationItem };
