import { FC, useEffect } from "react";
import { TClassName, TState } from "@/types";
import { cn } from "@/lib";
import Image from "next/image";
import Link from "next/link";
import { HeadAreaSalesmanInfo } from "../HeadAreaSalesmanInfo";
import { HeadAreaOrderInfo } from "../HeadAreaOrderInfo";
import { HeadAreaBackBtn } from "../HeadAreaBackBtn";
import cls from "./index.module.scss";
import { Order } from "@/types/api";
import { TRole } from "..";
import {
    setBuyerAvatarSelector,
    setSalesmanAvatarSelector,
    useChat,
} from "@/store/useChat";

interface Props extends TClassName {
    setActiveId: (id: Order["id"] | undefined) => void;
    orderInfo: Order;
    role: TRole;
}
// Helper function to get the buyer ID from the order info
const getBuyerId = (order: Order): number => {
    // Try to find a message from the buyer to extract their ID
    if (order.messages && order.messages.length > 0) {
        const buyerMessage = order.messages.find(msg => msg.whoSend === 'buyer');
        if (buyerMessage && buyerMessage.sender_id) {
            return buyerMessage.sender_id;
        }
    }
    // Fallback to using the first message's sender ID or a default ID
    return order.messages?.[0]?.sender_id || 1;
};

const HeadArea: FC<Props> = ({ className, setActiveId, orderInfo, role }) => {
    const BUYER_AVATAR_STUB = "/images/stub/avatar.png";
    const setBuyerAvatar = useChat(setBuyerAvatarSelector);
    const setSalesmanAvatar = useChat(setSalesmanAvatarSelector);

    useEffect(() => {
        setBuyerAvatar(BUYER_AVATAR_STUB);
    }, [BUYER_AVATAR_STUB]);

    useEffect(() => {
        setSalesmanAvatar(orderInfo.ad.product.images[0]);
    }, [orderInfo.ad.product.images[0]]);

    return (
        <div className={cn(cls.wrapper, [className])}>
            <div className={cn(cls.content)}>
                <HeadAreaBackBtn
                    role={role}
                    className={cn(cls.back_btn)}
                    setActiveId={setActiveId}
                />
                <div className={cn(cls.images)}>
                    {orderInfo.ad.product.images[0] ? (
                        <Image
                            src={orderInfo.ad.product.images[0]}
                            width={42}
                            height={42}
                            alt="Аватар"
                            className={cls.image}
                        />
                    ) : (
                        <></>
                    )}
                    <div className={cn(cls.border)}>
                        <Link href={`/buyer/profile/${getBuyerId(orderInfo)}`}>
                            <Image
                                src={BUYER_AVATAR_STUB}
                                width={42}
                                height={42}
                                alt="Аватар покупателя"
                                className={cls.image}
                                title="Перейти в профиль покупателя"
                            />
                        </Link>
                    </div>
                </div>
                <HeadAreaSalesmanInfo
                    orderInfo={orderInfo}
                    className={cn(cls.salesman_info)}
                />
            </div>
            <HeadAreaOrderInfo
                adsId={orderInfo.ads_id}
                className={cn(cls.order_info)}
            />
        </div>
    );
};

export { HeadArea };
