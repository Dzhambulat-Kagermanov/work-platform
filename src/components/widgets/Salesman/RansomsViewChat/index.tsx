import { FC } from "react";
import { TClassName, TState } from "@/types";
import { cn } from "@/lib";
import { ActionsArea } from "./ActionsArea";
import { MessagesArea } from "./MessagesArea";
import { HeadArea } from "./HeadArea";
import cls from "./index.module.scss";
import { useGetOrderQuery } from "@/hooks/api/orders";
import { PageLoader } from "@/components/ui/loaders";
import { PageErrorStub } from "@/components/ui/page-error-stub";

interface Props extends TClassName {
    setActiveSTUB: TState<number | undefined>;
    activeId?: number;
}
const RansomsViewChat: FC<Props> = ({ className, setActiveSTUB, activeId }) => {
    const { data: orderInfo, isLoading } = useGetOrderQuery(activeId);

    return (
        <section className={cn(cls.wrapper, [className])}>
            {orderInfo ? (
                <>
                    <HeadArea
                        className={cn(cls.head)}
                        orderInfo={orderInfo}
                        setActiveSTUB={setActiveSTUB}
                    />
                    <MessagesArea messages={orderInfo.messages} className={cn(cls.messages)} />
                    <ActionsArea className={cn(cls.actions)} />
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
