import { FC } from "react";
import { TClassName, TState } from "@/types";
import { cn } from "@/lib";
import { ActionsArea } from "./ActionsArea";
import { MessagesArea } from "./MessagesArea";
import { HeadArea } from "./HeadArea";
import cls from "./index.module.scss";

interface Props extends TClassName {
    setActiveSTUB: TState<number | undefined>;
}
const DeliveryViewChat: FC<Props> = ({ className, setActiveSTUB }) => {
    return (
        <section className={cn(cls.wrapper, [className])}>
            <HeadArea className={cn(cls.head)} setActiveSTUB={setActiveSTUB} />
            {/* <MessagesArea className={cn(cls.messages)} /> */}
            <ActionsArea className={cn(cls.actions)} />
        </section>
    );
};

export { DeliveryViewChat };
