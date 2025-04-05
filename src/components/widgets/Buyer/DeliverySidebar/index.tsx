import { FC } from "react";
import { TClassName } from "@/types";
import { cn } from "@/lib";
import { Item } from "./Item";
import { useScreen } from "@/hooks";
import { XS_BIG } from "@/constants";
import cls from "./index.module.scss";
import { useGetChatStatusesQuery } from "@/hooks/api/chat";
import { ChatStatus } from "@/types/api";

interface Props extends TClassName {
    chatType?: ChatStatus;
}
const DeliverySidebar: FC<Props> = ({ className, chatType }) => {
    const width = useScreen();

    const { data: chatStatuses, isLoading } = useGetChatStatusesQuery();

    if (isLoading || !chatStatuses || !chatStatuses.length) {
        return <></>;
    }

    return (
        <>
            {width > XS_BIG && (
                <aside className={cn(cls.wrapper, [className])}>
                    <div className={cn(cls.overlay)}>
                        <div className={cn(cls.nav_wrapper)}>
                            <nav className={cn(cls.nav)}>
                                {chatStatuses.map((item, index) => (
                                    <Item
                                        key={index}
                                        messageQnt={item.not_read}
                                        type={item.slug}
                                        className={cn(cls.item)}
                                        activeType={chatType}
                                    >
                                        {item.title}
                                    </Item>
                                ))}
                            </nav>
                        </div>
                    </div>
                </aside>
            )}
        </>
    );
};

export { DeliverySidebar };
