import { FC } from "react";
import { TClassName } from "@/types";
import { SALESMAN_NOTIFICATIONS_MODAL } from "@/constants";
import { cn } from "@/lib";
import { useModalBase } from "@/hooks";
import { ExpandArrowIcon } from "@/icons";
import { Typography } from "@/components/ui";
import { NotificationItem } from "@/components/entities/NotificationItem";
import { PortalWrapper } from "@/components/ui";
import cls from "./index.module.scss";
import {
    allNotificationsSelector,
    useSalesmanNotifications,
} from "@/store/useSalesmanNotifications";

interface Props extends TClassName {}
const NotificationMenu: FC<Props> = ({ className }) => {
    const { handleClose, modalState, visibleTransition } = useModalBase({
        slug: SALESMAN_NOTIFICATIONS_MODAL,
    });
    const allNotifications = useSalesmanNotifications(allNotificationsSelector);

    return (
        <PortalWrapper selector="#modals">
            {modalState && (
                <section
                    className={cn(cls.wrapper, [className], {
                        [cls.visible]: visibleTransition,
                    })}
                >
                    <div className={cn(cls.head)}>
                        <button
                            className={cn(cls.close_btn)}
                            onClick={handleClose}
                        >
                            <ExpandArrowIcon
                                color="var(--black-200)"
                                className={cn(cls.icon)}
                            />
                        </button>
                        <Typography font="Inter-B" size={24} tag="h2">
                            Уведомления
                        </Typography>
                    </div>
                    {allNotifications.length ? (
                        <ul className={cn(cls.group)}>
                            {allNotifications.map(({ id, ...props }) => {
                                return (
                                    <NotificationItem
                                        tag="li"
                                        className={cn(cls.item)}
                                        id={id}
                                        key={id}
                                        {...props}
                                        type="forMenu"
                                    />
                                );
                            })}
                        </ul>
                    ) : null}
                </section>
            )}
        </PortalWrapper>
    );
};

export { NotificationMenu };
