import { FC } from "react";
import { TClassName } from "@/types";
import { cn } from "@/lib";
import { Textarea, Typography } from "@/components/ui";
import cls from "./index.module.scss";

interface Props extends TClassName {}
const EditAdvertisementEditArea: FC<Props> = ({ className }) => {
    return (
        <section className={cn(cls.wrapper, [className])}>
            <div className={cn(cls.item)}>
                <Textarea
                    textareaCls={cn(cls.textarea)}
                    label="Условия заказа:"
                    wrapperCls={cn(cls.textarea_wrapper)}
                />
                <Typography font="Inter-R" size={12}>
                    Условия сотрудничества с вами. Их увидят пользователи до
                    того как оформят заказ
                </Typography>
            </div>
            <div className={cn(cls.item)}>
                <Textarea
                    textareaCls={cn(cls.textarea)}
                    label="Инструкция выкупа для покупателя:"
                    wrapperCls={cn(cls.textarea_wrapper)}
                />
                <Typography font="Inter-R" size={12}>
                    Подробная инструкция как найти и выкупить ваш товар. Эта
                    инструкция будет отправлена автоматически при создании
                    выкупа.
                </Typography>
            </div>
            <div className={cn(cls.item)}>
                <Textarea
                    textareaCls={cn(cls.textarea)}
                    label="Критерии отзыва:"
                    wrapperCls={cn(cls.textarea_wrapper)}
                />
                <Typography font="Inter-R" size={12}>
                    Критерии отзыва, которые покупатель должен соблюсти, когда
                    будет составлять отзыв.
                </Typography>
            </div>
        </section>
    );
};

export { EditAdvertisementEditArea };
