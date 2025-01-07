import { FC } from "react";
import { TClassName } from "@/types";
import { cn } from "@/lib";
import { AccountContentBlock, Typography } from "@/components/ui";
import Image from "next/image";
import cls from "./index.module.scss";

interface Props extends TClassName {}
const ProfileNotifications: FC<Props> = ({ className }) => {
    return (
        <AccountContentBlock
            tag="section"
            title="Уведомления"
            className={cn(cls.wrapper, [className])}
            contentWrapperCls={cn(cls.content)}
        >
            <button className={cn(cls.notification_link)}>
                <Image
                    src="/images/shared/social/telegram-original.svg"
                    alt="Telegram"
                    width={24}
                    height={24}
                />
                <Typography font="Inter-SB" size={16}>
                    Подключить
                </Typography>
            </button>
            <Typography font="Inter-R" size={16} tag="h3">
                Подключите телеграм бота, чтобы получать уведомления о ваших
                заказах
            </Typography>
        </AccountContentBlock>
    );
};

export { ProfileNotifications };
