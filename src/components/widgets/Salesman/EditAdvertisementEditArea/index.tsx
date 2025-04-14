import { FC } from "react";
import { TClassName } from "@/types";
import { cn } from "@/lib";
import { Button, Textarea, Typography } from "@/components/ui";
import cls from "./index.module.scss";
import { SALESMAN_EDIT_ADVERTISEMENT_TEMPLATE_EDIT_MODAL } from "@/constants";
import { useGetAdvTemplates } from "@/hooks/api/seller/useGetAdvTemplates";
import { useModalStore } from "@/store";
import {
    useCreateAdvertisement,
    setTemplateEditTypeSelector,
} from "@/store/useCreateAdvertisement";
import { showModalSelector } from "@/store/useModalStore";

interface Props
    extends TClassName,
        Record<"conditions" | "instructions" | "criterias", string>,
        Record<
            "setConditions" | "setInstructions" | "setCriterias",
            React.Dispatch<React.SetStateAction<string>>
        > {}
const EditAdvertisementEditArea: FC<Props> = ({
    conditions,
    setConditions,
    instructions,
    setInstructions,
    criterias: criteria,
    setCriterias: setCriteria,
    className,
}) => {
    const getAdvConditionsTemplatesQuery = useGetAdvTemplates("conditions");
    const getAdvInstructionsTemplatesQuery = useGetAdvTemplates("instructions");
    const getAdvReviewsTemplatesQuery = useGetAdvTemplates("reviewsCriteria");

    const showModal = useModalStore(showModalSelector);
    const setTemplateEditType = useCreateAdvertisement(
        setTemplateEditTypeSelector,
    );

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
                <div className={cls.info}>
                    <Typography font="Inter-R" size={12}>
                        Если у вас есть особые условия, то обозначьте тут. Их
                        увидят пользователи до того как оформят заказ
                    </Typography>
                    <Button
                        size="mid"
                        onClick={() => {
                            if (getAdvConditionsTemplatesQuery.data?.text)
                                setConditions(
                                    conditions
                                        ? conditions +
                                              `\n${getAdvConditionsTemplatesQuery.data.text}`
                                        : getAdvConditionsTemplatesQuery.data
                                              .text,
                                );
                        }}
                        theme="fill"
                        className={cls.btn}
                    >
                        Вставить шаблон
                    </Button>
                    <Button
                        size="mid"
                        onClick={() => {
                            setTemplateEditType("conditions");
                            showModal({
                                slug: SALESMAN_EDIT_ADVERTISEMENT_TEMPLATE_EDIT_MODAL,
                            });
                        }}
                        theme="fill"
                        className={cls.btn}
                    >
                        Изменить шаблон
                    </Button>
                </div>
            </div>
            <div className={cn(cls.item)}>
                <Textarea
                    textareaCls={cn(cls.textarea)}
                    label="Инструкция выкупа для покупателя:"
                    wrapperCls={cn(cls.textarea_wrapper)}
                    value={instructions}
                    onChange={(e) => setInstructions(e.target.value)}
                />
                <div className={cls.info}>
                    <Typography font="Inter-R" size={12}>
                        Предоставьте инструкцию как найти и выкупить ваш товар.
                        Эта инструкция будет отправлена автоматически покупателю
                        в момент создания сделки.
                    </Typography>
                    <Button
                        size="mid"
                        onClick={() => {
                            if (getAdvInstructionsTemplatesQuery.data?.text)
                                setInstructions(
                                    instructions
                                        ? instructions +
                                              `\n${getAdvInstructionsTemplatesQuery.data.text}`
                                        : getAdvInstructionsTemplatesQuery.data
                                              .text,
                                );
                        }}
                        theme="fill"
                        className={cls.btn}
                    >
                        Вставить шаблон
                    </Button>
                    <Button
                        size="mid"
                        onClick={() => {
                            setTemplateEditType("instructions");
                            showModal({
                                slug: SALESMAN_EDIT_ADVERTISEMENT_TEMPLATE_EDIT_MODAL,
                            });
                        }}
                        theme="fill"
                        className={cls.btn}
                    >
                        Изменить шаблон
                    </Button>
                </div>
            </div>
            <div className={cn(cls.item)}>
                <Textarea
                    textareaCls={cn(cls.textarea)}
                    label="Критерии отзыва:"
                    wrapperCls={cn(cls.textarea_wrapper)}
                    value={criteria}
                    onChange={(e) => setCriteria(e.target.value)}
                />
                <div className={cls.info}>
                    <Typography font="Inter-R" size={12}>
                        Предоставьте критерии отзыва, которые покупатель должен
                        соблюсти, когда будет составлять отзыв.
                    </Typography>
                    <Button
                        size="mid"
                        theme="fill"
                        className={cls.btn}
                        onClick={() => {
                            if (getAdvReviewsTemplatesQuery.data?.text)
                                setCriteria(
                                    criteria
                                        ? criteria +
                                              `\n${getAdvReviewsTemplatesQuery.data.text}`
                                        : getAdvReviewsTemplatesQuery.data.text,
                                );
                        }}
                    >
                        Вставить шаблон
                    </Button>
                    <Button
                        size="mid"
                        onClick={() => {
                            setTemplateEditType("reviewsCriteria");
                            showModal({
                                slug: SALESMAN_EDIT_ADVERTISEMENT_TEMPLATE_EDIT_MODAL,
                            });
                        }}
                        theme="fill"
                        className={cls.btn}
                    >
                        Изменить шаблон
                    </Button>
                </div>
            </div>
        </section>
    );
};

export { EditAdvertisementEditArea };
