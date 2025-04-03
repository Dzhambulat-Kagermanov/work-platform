"use client";
import { FC, useEffect, useRef } from "react";
import { cn } from "@/lib";
import { TChildren } from "@/types";
import { NotificationItem } from "@/components/entities/NotificationItem";
import cls from "./index.module.scss";
import { HIDING_MS, VISIBLE_DELAY_MS } from "./config/notifications-times";
import {
    allNotificationsSelector,
    deleteTempNotificationSelector,
    notificationsLayoutStateSelector,
    resetTempNotificationsSelector,
    setNotificationsLayoutStateSelector,
    useSalesmanNotifications,
} from "@/store/useSalesmanNotifications";

interface Props extends TChildren {}
const NotificationsLayout: FC<Props> = ({ children }) => {
    // REACT
    const hiddenTimeoutRef = useRef<{
        hidden: NodeJS.Timeout | null;
        hiding: NodeJS.Timeout | null;
    }>({
        hidden: null,
        hiding: null,
    });

    // ZUSTAND
    const layoutState = useSalesmanNotifications(
        notificationsLayoutStateSelector,
    );
    const resetTempNotifications = useSalesmanNotifications(
        resetTempNotificationsSelector,
    );
    const setLayoutState = useSalesmanNotifications(
        setNotificationsLayoutStateSelector,
    );
    const notifications = useSalesmanNotifications(allNotificationsSelector);
    const deleteNotification = useSalesmanNotifications(
        deleteTempNotificationSelector,
    );

    // HANDLERS
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

    // EFFECTS
    useEffect(() => {
        if (notifications.length) {
            setLayoutState("isVisible");
        }
    }, [notifications]);

    useEffect(() => {
        if (layoutState === "isVisible") {
            hiddenTimeoutRef.current.hiding = setTimeout(() => {
                setLayoutState("isHiding");
                hiddenTimeoutRef.current.hidden = setTimeout(() => {
                    setLayoutState("isHidden");
                    resetTempNotifications();
                }, HIDING_MS);
            }, VISIBLE_DELAY_MS);
        }
    }, [layoutState]);

    return (
        <>
            {layoutState !== "isHidden" && notifications.length ? (
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
                                    deleteNotification={deleteNotification}
                                />
                            );
                        })}
                    </ul>
                </div>
            ) : null}
            {children}
        </>
    );
};

export { NotificationsLayout };
