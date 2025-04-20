"use client";
import { FC, MouseEventHandler } from "react";
import { TClassName } from "@/types";
import { Typography } from "@/components/ui";
import {
    SupportIcon,
    AccountIcon,
    CreditCardIcon,
    NotificationIcon,
    ReferralIcon,
} from "@/icons";
import { cn } from "@/lib";
import { Item } from "../Item";
import { LinksDropdown } from "../LinksDropdown";
import cls from "./index.module.scss";
import { TSalesmanHomePageType } from "../../HomePagesSwitcher";
import { ROUTES, SALESMAN_NOTIFICATIONS_MODAL } from "@/constants";
import { useGetBalanceQuery } from "@/hooks/api/auth";
import { useModalStore } from "@/store";
import {
    allNotificationsSelector,
    useSalesmanNotifications,
} from "@/store/useSalesmanNotifications";

interface Props extends TClassName {
    sidebarIsExpand?: boolean;
    linkOnClick?: () => void;
    homePageType: TSalesmanHomePageType;
    collapseSidebar?: MouseEventHandler;
}
const LinksGroup: FC<Props> = ({
    sidebarIsExpand,
    className,
    linkOnClick,
    homePageType,
    collapseSidebar,
}) => {
    const allNotifications = useSalesmanNotifications(allNotificationsSelector);
    const showModal = useModalStore((state) => state.showModal);
    const { data: balance } = useGetBalanceQuery();

    return (
        <ul className={cn(cls.group, [className])}>
            <LinksDropdown
                homePageType={homePageType}
                linkOnClick={linkOnClick}
                className={cn(cls.dropdown)}
                sidebarIsExpand={sidebarIsExpand}
                collapseSidebar={collapseSidebar}
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
                link={ROUTES.SALESMAN.SUPPORT}
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
                link={ROUTES.SALESMAN.PROFILE}
                className={cn(cls.item)}
            />
            <Item
                textClassName={cls.balance_text}
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
                link={ROUTES.SALESMAN.BALANCE.VALUE}
                className={cn(cls.item)}
                additionalInfo={
                    <Typography
                        font="Inter-SB"
                        size={16}
                        className={cn(cls.balance_addition)}
                    >
                        {(+(balance?.accessBalance || 0)).toFixed(0)} ₽
                    </Typography>
                }
            />
            <Item
                linkOnClick={(e) => {
                    linkOnClick && linkOnClick();
                }}
                sidebarIsExpand={sidebarIsExpand}
                tag="li"
                text="Тарифы"
                icon={
                    <CreditCardIcon
                        color="var(--grey-200)"
                        className={cn(cls.icon)}
                    />
                }
                link={ROUTES.SALESMAN.BALANCE.TARIFFS}
                className={cn(cls.item)}
            />
            <Item
                linkOnClick={(e) => {
                    linkOnClick && linkOnClick();
                    showModal({ slug: SALESMAN_NOTIFICATIONS_MODAL });
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
                        {allNotifications.length}
                    </Typography>
                }
            />
            <Item
                linkOnClick={(e) => {
                    linkOnClick && linkOnClick();
                }}
                sidebarIsExpand={sidebarIsExpand}
                tag="li"
                text="Реферальная программа"
                icon={
                    <ReferralIcon
                        color="var(--grey-200)"
                        className={cn(cls.icon)}
                    />
                }
                link={ROUTES.SALESMAN.REFERRALS}
                className={cn(cls.item)}
            />
        </ul>
    );
};

export { LinksGroup };
