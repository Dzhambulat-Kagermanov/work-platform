"use client";
import { FC } from "react";
import { TClassName } from "@/types";
import { cn } from "@/lib";
import { MobileSwitcherItem } from "../MobileSwitcherItem";
import { TChatType } from "../../DeliverySidebar/types";
import { useScreen } from "@/hooks";
import { XS_BIG } from "@/constants";
import cls from "./index.module.scss";

interface Props extends TClassName {
    chatType: TChatType;
}
const MobileSwitcher: FC<Props> = ({ className, chatType }) => {
    const width = useScreen();
    return (
        <>
            {width <= XS_BIG && (
                <div className={cn(cls.wrapper, [className])}>
                    <ul className={cn(cls.switcher)}>
                        <MobileSwitcherItem
                            messageQnt={10}
                            type={undefined}
                            className={cn(cls.item)}
                            activeType={chatType}
                        >
                            Все чаты
                        </MobileSwitcherItem>
                        <MobileSwitcherItem
                            messageQnt={10}
                            type="waitingOrder"
                            className={cn(cls.item)}
                            activeType={chatType}
                        >
                            Ожидание заказа
                        </MobileSwitcherItem>
                        <MobileSwitcherItem
                            messageQnt={10}
                            type="waitingReceive"
                            className={cn(cls.item)}
                            activeType={chatType}
                        >
                            Ожидание получения товара
                        </MobileSwitcherItem>
                        <MobileSwitcherItem
                            messageQnt={10}
                            type="confirmation"
                            className={cn(cls.item)}
                            activeType={chatType}
                        >
                            Подтверждение
                        </MobileSwitcherItem>
                        <MobileSwitcherItem
                            messageQnt={10}
                            type="cashbackReceived"
                            className={cn(cls.item)}
                            activeType={chatType}
                        >
                            Кэшбек получен
                        </MobileSwitcherItem>
                        <MobileSwitcherItem
                            messageQnt={10}
                            type="canceled"
                            className={cn(cls.item)}
                            activeType={chatType}
                        >
                            Отменен
                        </MobileSwitcherItem>
                        <MobileSwitcherItem
                            messageQnt={10}
                            type="archive"
                            className={cn(cls.item)}
                            activeType={chatType}
                        >
                            Архив
                        </MobileSwitcherItem>
                    </ul>
                </div>
            )}
        </>
    );
};

export { MobileSwitcher };
