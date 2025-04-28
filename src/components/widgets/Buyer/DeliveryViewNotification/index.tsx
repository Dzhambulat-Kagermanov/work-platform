import { FC, forwardRef, Ref } from "react";
import { cn } from "@/lib";
import { TClassName } from "@/types";
import { returnContent } from "./lib/returnContent";
import cls from "./index.module.scss";
import { Order } from "@/types/api";

export type TViewChatNotification =
    | "waitingOrder"
    | "canceled"
    | "waitingReceive"
    | "confirmation"
    | "cashbackReceived"
    | undefined;

interface Props extends TClassName {
    orderData?: Order;
    notificationType?: TViewChatNotification;
}
const DeliveryViewNotification: FC<Props> = forwardRef(
    ({ className, orderData, notificationType: type }, ref: Ref<HTMLDivElement> | undefined) => {
        // Если тип не указан, используем "waitingOrder" по умолчанию
        let notificationType: TViewChatNotification = type || "waitingOrder";
        const { contentForDescription, contentForPlaque } =
            returnContent(notificationType, orderData);
        return (
            <>
                {notificationType && (
                    <div
                        className={cn(cls.wrapper, [
                            className,
                            cls[notificationType],
                        ])}
                        ref={ref}
                    >
                        <div className={cn(cls.plaque)}>{contentForPlaque}</div>
                        <div className={cn(cls.description)}>
                            {contentForDescription}
                        </div>
                    </div>
                )}
            </>
        );
    },
);

export { DeliveryViewNotification };
