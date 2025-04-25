import { FC, useState } from "react";
import { TClassName, TState } from "@/types";
import { cn } from "@/lib";
import { Input, Typography } from "@/components/ui";
import Image from "next/image";
import { SearchIcon } from "@/icons";
import { Chats } from "./Chats";
import { MobileSwitcher } from "./MobileSwitcher";
import cls from "./index.module.scss";
import { ChatStatus } from "@/types/api";
import { useDebounce } from "use-debounce";

interface Props extends TClassName {
    chatType: ChatStatus;
}
const DeliveryChats: FC<Props> = ({ className, chatType }) => {
    const [search, setSearch] = useState("");
    const [searchDebounce] = useDebounce(search, 600);

    return (
        <section className={cn(cls.wrapper, [className])}>
            <div className={cn(cls.head)}>
                <div className={cn(cls.preview)}>
                    <Image
                        src="/images/delivery/order.svg"
                        alt="Мои заказы"
                        width={24}
                        height={24}
                    />
                    <Typography
                        className={cn(cls.title)}
                        tag="h1"
                        font="Inter-B"
                        size={24}
                    >
                        Мои заказы
                    </Typography>
                </div>
                <Input
                    inpCls={cn(cls.inp)}
                    contentCls={cn(cls.inp_content)}
                    wrapperCls={cn(cls.inp_wrapper)}
                    placeholder="Поиск.1.."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    icon={<SearchIcon color="var(--grey-300)" />}
                />
                <MobileSwitcher
                    className={cn(cls.switcher)}
                    chatType={chatType}
                />
            </div>
            <div className={cn(cls.chat_wrapper)}>
                <Chats
                    search={searchDebounce}
                    chatType={chatType}
                    className={cn(cls.chat)}
                />
            </div>
        </section>
    );
};

export { DeliveryChats };
