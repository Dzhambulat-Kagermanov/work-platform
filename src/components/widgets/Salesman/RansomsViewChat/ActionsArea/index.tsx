import { FC } from "react";
import { cn } from "@/lib";
import { TClassName } from "@/types";
import { ViewChatPlus } from "@/components/features/ViewChatPlus";
import { Input } from "@/components/ui";
import { ViewChatSendMessage } from "@/components/features/ViewChatSendMessage";
import cls from "./index.module.scss";

interface Props extends TClassName {}
const ActionsArea: FC<Props> = ({ className }) => {
    return (
        <div className={cn(cls.wrapper, [className])}>
            <ViewChatPlus className={cn(cls.plus_btn)} />
            <Input
                wrapperCls={cn(cls.inp_wrapper)}
                inpCls={cn(cls.inp)}
                placeholder="Написать сообщение"
            />
            <ViewChatSendMessage className={cn(cls.send_btn)} />
        </div>
    );
};

export { ActionsArea };
