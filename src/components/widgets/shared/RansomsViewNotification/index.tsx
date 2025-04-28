import { FC, forwardRef, Ref } from "react"
import { cn } from "@/lib"
import { TClassName } from "@/types"
import { returnContent } from "./lib/returnContent"
import cls from "./index.module.scss"
import Chat, { EnChatStatuses } from '@/types/api/Chat'
import { Order } from "@/types/api"


interface Props extends TClassName {
    status?: Chat['status']
    orderData?: Order
}
const RansomsViewNotification: FC<Props> = forwardRef(
    ({ className, status, orderData }, ref: Ref<HTMLDivElement> | undefined) => {

        let notificationType: EnChatStatuses | undefined = status
        const { contentForDescription, contentForPlaque } =
            returnContent(notificationType, orderData)
        return (
            <>
                {notificationType && (
                    <div
                        ref={ref}
                        className={cn(cls.wrapper, [
                            className,
                            cls[notificationType],
                        ])}
                    >
                        <div className={cn(cls.plaque)}>{contentForPlaque}</div>
                        <div className={cn(cls.description)}>
                            {contentForDescription}
                        </div>
                    </div>
                )}
            </>
        )
    },
)

export { RansomsViewNotification }
