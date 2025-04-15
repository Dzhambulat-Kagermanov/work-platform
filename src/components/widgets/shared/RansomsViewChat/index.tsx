import { FC } from "react";
import { TClassName } from "@/types";
import { cn } from "@/lib";
import { ActionsArea } from "./ActionsArea";
import { MessagesArea } from "./MessagesArea";
import { HeadArea } from "./HeadArea";
import cls from "./index.module.scss";
import { PageLoader } from "@/components/ui/loaders";
import { PageErrorStub } from "@/components/ui/page-error-stub";
import { Order } from "@/types/api";

export type TRole = "salesman" | "buyer";

interface Props extends TClassName {
    setActiveId: (id: Order["id"] | undefined) => void;
    activeId?: number;
    chatData?: Order;
    isLoading?: boolean;
    role: TRole;
}
const RansomsViewChat: FC<Props> = ({
    className,
    setActiveId,
    activeId,
    chatData,
    isLoading,
    role,
}) => {
    return (
        <section className={cn(cls.wrapper, [className])}>
            {chatData ? (
                <>
                    <HeadArea
                        role={role}
                        className={cn(cls.head)}
                        orderInfo={chatData}
                        setActiveId={setActiveId}
                    />
                    <MessagesArea
                        role={role}
                        status={chatData.status}
                        messages={chatData?.messages}
                        className={cn(cls.messages)}
                    />
                    <ActionsArea
                        role={role}
                        className={cn(cls.actions)}
                        activeId={activeId}
                    />
                </>
            ) : isLoading ? (
                <PageLoader className="w-full h-full" />
            ) : (
                <PageErrorStub
                    className="w-full"
                    text={
                        !activeId ? "Чат не выбран" : "Не удалось загрузить чат"
                    }
                />
            )}
        </section>
    );
};

export { RansomsViewChat };
