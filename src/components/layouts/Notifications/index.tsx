"use client";
import { FC, useEffect, useRef, useState } from "react";
import { cn } from "@/lib";
import { TChildren, TNotificationItemProps } from "@/types";
import { NOTIFICATIONS } from "./constants/notifications";
import { NotificationItem } from "@/components/entities/NotificationItem";
import cls from "./index.module.scss";

interface Props extends TChildren {}
const NotificationsLayout: FC<Props> = ({ children }) => {
    const VISIBLE_DELAY_MS = 5000;
    const HIDING_MS = 3000;
    const [layoutState, setLayoutState] = useState<
        "isHidden" | "isHiding" | "isVisible"
    >("isVisible");
    const [notifications, setNotifications] =
        useState<TNotificationItemProps[]>(NOTIFICATIONS);
    const hiddenTimeoutRef = useRef<{
        hidden: NodeJS.Timeout | null;
        hiding: NodeJS.Timeout | null;
    }>({
        hidden: null,
        hiding: null,
    });

    const handleMouseover = () => {
        if (layoutState !== "isVisible") {
            setLayoutState("isVisible");

            if (hiddenTimeoutRef.current.hiding) {
                clearTimeout(hiddenTimeoutRef.current.hiding);
                if (hiddenTimeoutRef.current.hidden) {
                    clearTimeout(hiddenTimeoutRef.current.hidden);
                }
            }
        }
    };
    useEffect(() => {
        if (layoutState === "isVisible") {
            hiddenTimeoutRef.current.hiding = setTimeout(() => {
                setLayoutState("isHiding");
                hiddenTimeoutRef.current.hidden = setTimeout(() => {
                    setLayoutState("isHidden");
                }, HIDING_MS);
            }, VISIBLE_DELAY_MS);
        }
    }, [layoutState]);

    return (
        <>
            {layoutState !== "isHidden" && (
                <div
                    className={cn(cls.wrapper, [], {
                        [cls.isHiding]: layoutState === "isHiding",
                        [cls.isVisible]: layoutState === "isVisible",
                    })}
                >
                    <ul className={cn(cls.group)} onMouseOver={handleMouseover}>
                        {notifications.map(({ id, ...props }) => {
                            return (
                                <NotificationItem
                                    tag="li"
                                    isHiddenCls={cn(cls.isHidden)}
                                    id={id}
                                    type="forOverlay"
                                    key={id}
                                    {...props}
                                    className={cn(cls.item)}
                                    setNotificationsState={setNotifications}
                                />
                            );
                        })}
                    </ul>
                </div>
            )}
            {children}
        </>
    );
};

export { NotificationsLayout };
