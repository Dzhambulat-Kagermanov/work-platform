import { FC, forwardRef, Ref } from "react"
import { cn } from "@/lib"
import { TClassName } from "@/types"
import { returnContent } from "./lib/returnContent"
import cls from "./index.module.scss"
import Chat, { EnChatStatuses } from '@/types/api/Chat'


interface Props extends TClassName {
    status?: Chat['status']
}
const RansomsViewNotification: FC<Props> = forwardRef(
    ({ className, status }, ref: Ref<HTMLDivElement> | undefined) => {

        let notificationType: EnChatStatuses | undefined = status
        const { contentForDescription, contentForPlaque } =
            returnContent(notificationType)
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
