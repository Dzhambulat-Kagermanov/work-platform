'use client'
import { FC, useState } from "react"
import { cn } from "@/lib"
import { TClassName } from "@/types"
import { ViewChatPlus } from "@/components/features/ViewChatPlus"
import { Input } from "@/components/ui"
import { ViewChatSendMessage } from "@/components/features/ViewChatSendMessage"
import cls from "./index.module.scss"

interface Props extends TClassName { }
const ActionsArea: FC<Props> = ({ className }) => {
    const [message, setMessage] = useState<string>('')

    return (
        <div className={cn(cls.wrapper, [className])}>
            <ViewChatPlus className={cn(cls.plus_btn)} />
            <Input
                value={message}
                wrapperCls={cn(cls.inp_wrapper)}
                inpCls={cn(cls.inp)}
                placeholder="Написать сообщение"
                onChange={(event) => {
                    setMessage(event.target.value)
                }}
            />
            <ViewChatSendMessage className={cn(cls.send_btn)} />
        </div>
    )
}

export { ActionsArea }
