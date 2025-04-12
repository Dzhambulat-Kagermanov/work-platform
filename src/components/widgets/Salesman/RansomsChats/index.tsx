"use client";
import { FC, useState } from "react";
import { TClassName } from "@/types";
import { cn } from "@/lib";
import { Input, Typography } from "@/components/ui";
import Image from "next/image";
import { SearchIcon } from "@/icons";
import { MobileSwitcher } from "./MobileSwitcher";
import { useScreen } from "@/hooks";
import { XS_BIG } from "@/constants";
import cls from "./index.module.scss";
import { ChatStatus } from "@/types/api";
import { useDebounce } from "use-debounce";
import { Chats } from "./Chats";

interface Props extends TClassName {
    chatType: ChatStatus;
}
const RansomsChats: FC<Props> = ({ className, chatType }) => {
    const [search, setSearch] = useState("");
    const [searchDebounce] = useDebounce(search, 600);

    const width = useScreen();
    return (
        <section className={cn(cls.wrapper, [className])}>
            <div className={cn(cls.head)}>
                {width > XS_BIG && (
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
                            Выкупы
                        </Typography>
                    </div>
                )}
                <Input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    inpCls={cn(cls.inp)}
                    contentCls={cn(cls.inp_content)}
                    wrapperCls={cn(cls.inp_wrapper)}
                    placeholder="Поиск..."
                    icon={<SearchIcon color="var(--grey-300)" />}
                />
                <MobileSwitcher
                    className={cn(cls.switcher)}
                    chatType={chatType}
                />
            </div>
            <div className={cn(cls.chat_wrapper)}>
                <Chats
                    chatType={chatType}
                    search={searchDebounce}
                    className={cn(cls.chat)}
                />
            </div>
        </section>
    );
};

export { RansomsChats };
