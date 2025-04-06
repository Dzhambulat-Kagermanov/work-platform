import { FC } from "react";
import { TClassName, TState } from "@/types";
import { cn } from "@/lib";
import { ActionsArea } from "./ActionsArea";
import { MessagesArea } from "./MessagesArea";
import { HeadArea } from "./HeadArea";
import cls from "./index.module.scss";
import { PageLoader } from "@/components/ui/loaders";
import { PageErrorStub } from "@/components/ui/page-error-stub";
import { Order } from "@/types/api";

interface Props extends TClassName {
    setActiveSTUB: TState<number | undefined>;
    activeId?: number;
    chatData?: Order;
    isLoading?: boolean;
}
const RansomsViewChat: FC<Props> = ({
    className,
    setActiveSTUB,
    activeId,
    chatData,
    isLoading,
}) => {
    return (
        <section className={cn(cls.wrapper, [className])}>
            {chatData ? (
                <>
                    <HeadArea
                        className={cn(cls.head)}
                        orderInfo={chatData}
                        setActiveSTUB={setActiveSTUB}
                    />
                    <MessagesArea
                        status={chatData.status}
                        messages={chatData?.messages}
                        className={cn(cls.messages)}
                    />
                    <ActionsArea
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
