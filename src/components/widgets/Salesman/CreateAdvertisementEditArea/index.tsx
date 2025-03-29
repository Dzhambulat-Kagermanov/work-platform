import { FC } from "react";
import { TClassName } from "@/types";
import { cn } from "@/lib";
import { Textarea, Typography } from "@/components/ui";
import cls from "./index.module.scss";

interface Props
    extends TClassName,
        Record<"conditions" | "instructions" | "criterias", string>,
        Record<
            "setConditions" | "setInstructions" | "setCriterias",
            React.Dispatch<React.SetStateAction<string>>
        > {}
const CreateAdvertisementEditArea: FC<Props> = ({
    conditions,
    setConditions,
    instructions,
    setInstructions,
    criterias,
    setCriterias,
    className,
}) => {
    return (
        <section className={cn(cls.wrapper, [className])}>
            <div className={cn(cls.item)}>
                <Textarea
                    textareaCls={cn(cls.textarea)}
                    label="Условия заказа:"
                    wrapperCls={cn(cls.textarea_wrapper)}
                    value={conditions}
                    onChange={(e) => setConditions(e.target.value)}
                />
                <Typography font="Inter-R" size={12}>
                    Если у вас есть особые условия, то обозначьте тут. Их увидят
                    пользователи до того как оформят заказ
                </Typography>
            </div>
            <div className={cn(cls.item)}>
                <Textarea
                    textareaCls={cn(cls.textarea)}
                    label="Инструкция выкупа для покупателя:"
                    wrapperCls={cn(cls.textarea_wrapper)}
                    value={instructions}
                    onChange={(e) => setInstructions(e.target.value)}
                />
                <Typography font="Inter-R" size={12}>
                    Предоставьте инструкцию как найти и выкупить ваш товар. Эта
                    инструкция будет отправлена автоматически покупателю в
                    момент создания сделки.
                </Typography>
            </div>
            <div className={cn(cls.item)}>
                <Textarea
                    textareaCls={cn(cls.textarea)}
                    label="Критерии отзыва:"
                    wrapperCls={cn(cls.textarea_wrapper)}
                    value={criterias}
                    onChange={(e) => setCriterias(e.target.value)}
                />
                <Typography font="Inter-R" size={12}>
                    Предоставьте критерии отзыва, которые покупатель должен
                    соблюсти, когда будет составлять отзыв.
                </Typography>
            </div>
        </section>
    );
};

export { CreateAdvertisementEditArea };
