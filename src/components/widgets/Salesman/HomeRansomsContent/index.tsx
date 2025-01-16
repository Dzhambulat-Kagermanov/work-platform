import { FC } from "react";
import { TClassName } from "@/types";
import { cn } from "@/lib";
import { RansomsChatOrderInfoModal } from "../RansomsChatOrderInfoModal";
import { RansomsContent } from "../RansomsContent";
import { RansomsSidebar } from "../RansomsSidebar";
import { RansomsViewFileModal } from "../RansomsViewFileModal";
import cls from "./index.module.scss";
import { ChatStatus } from "@/types/api";

interface Props extends TClassName {
    chatType: ChatStatus;
}
const HomeRansomsContent: FC<Props> = ({ className, chatType }) => {
    return (
        <div className={cn(cls.wrapper, [className])}>
            <div className={cn(cls.complex, ["modules-gap-top"])}>
                <RansomsSidebar
                    className={cn(cls.sidebar)}
                    chatType={chatType}
                />
                <RansomsContent
                    className={cn(cls.content)}
                    chatType={chatType}
                />
            </div>
            <RansomsChatOrderInfoModal className={cn(cls.order_info_modal)} />
            <RansomsViewFileModal className={cn(cls.view_file_modal)} />
        </div>
    );
};

export { HomeRansomsContent };
