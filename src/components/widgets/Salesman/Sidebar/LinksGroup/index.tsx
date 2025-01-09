"use client";
import { FC, MouseEventHandler } from "react";
import { TClassName } from "@/types";
import { Typography } from "@/components/ui";
import {
    SupportIcon,
    AccountIcon,
    CreditCardIcon,
    NotificationIcon,
} from "@/icons";
import { cn } from "@/lib";
import { Item } from "../Item";
import { LinksDropdown } from "../LinksDropdown";
import cls from "./index.module.scss";
import { TSalesmanHomePageType } from "../../HomePagesSwitcher";
import { useModalStore } from "@/store";
import { SALESMAN_NOTIFICATIONS_MODAL } from "@/constants";

interface Props extends TClassName {
    sidebarIsExpand?: boolean;
    linkOnClick?: () => void;
    homePageType: TSalesmanHomePageType;
}
const LinksGroup: FC<Props> = ({
    sidebarIsExpand,
    className,
    linkOnClick,
    homePageType,
}) => {
    const showModal = useModalStore((state) => state.showModal);
    const handleNotifications: MouseEventHandler = () => {
        showModal({ slug: SALESMAN_NOTIFICATIONS_MODAL });
    };
    return (
        <ul className={cn(cls.group, [className])}>
            <LinksDropdown
                homePageType={homePageType}
                linkOnClick={linkOnClick}
                className={cn(cls.dropdown)}
                sidebarIsExpand={sidebarIsExpand}
            />
            <Item
                linkOnClick={linkOnClick}
                sidebarIsExpand={sidebarIsExpand}
                tag="li"
                text="Поддержка"
                icon={
                    <SupportIcon
                        color="var(--grey-200)"
                        className={cn(cls.icon)}
                    />
                }
                link="/salesman/support"
                className={cn(cls.item)}
            />
            <Item
                linkOnClick={linkOnClick}
                sidebarIsExpand={sidebarIsExpand}
                tag="li"
                text="Профиль"
                icon={
                    <AccountIcon
                        color="var(--grey-200)"
                        className={cn(cls.icon)}
                    />
                }
                link="/salesman/profile"
                className={cn(cls.item)}
            />
            <Item
                linkOnClick={linkOnClick}
                sidebarIsExpand={sidebarIsExpand}
                tag="li"
                text="Баланс"
                icon={
                    <CreditCardIcon
                        color="var(--grey-200)"
                        className={cn(cls.icon)}
                    />
                }
                link="/salesman/balance"
                className={cn(cls.item)}
                additionalInfo={
                    <Typography
                        font="Inter-SB"
                        size={16}
                        className={cn(cls.balance_addition)}
                    >
                        9550₽
                    </Typography>
                }
            />
            <Item
                linkOnClick={(e) => {
                    linkOnClick && linkOnClick();
                    handleNotifications(e);
                }}
                sidebarIsExpand={sidebarIsExpand}
                tag="li"
                text="Уведомления"
                icon={
                    <NotificationIcon
                        color="var(--grey-200)"
                        className={cn(cls.icon)}
                    />
                }
                className={cn(cls.item)}
                additionalInfo={
                    <Typography
                        font="Inter-SB"
                        size={16}
                        className={cn(cls.notifications_addition)}
                    >
                        0
                    </Typography>
                }
            />
        </ul>
    );
};

export { LinksGroup };
