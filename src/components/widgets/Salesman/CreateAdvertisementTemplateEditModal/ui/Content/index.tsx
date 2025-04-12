"use client";
import { ChangeEventHandler, FC, MouseEventHandler } from "react";
import cls from "./index.module.scss";
import { TClassName, TState } from "@/types";
import { Typography, Textarea, Button } from "@/components/ui";
import { cn } from "@/lib";
import { useUpdateAdvTemplates } from "@/hooks/api/seller/useUpdateAdvTemplates";
import {
    useCreateAdvertisement,
    templateEditTypeSelector,
    TTemplateEditType,
} from "@/store/useCreateAdvertisement";
import toast from "react-hot-toast";
import { useModalStore } from "@/store";
import { hideModalSelector } from "@/store/useModalStore";
import { SALESMAN_CREATE_ADVERTISEMENT_TEMPLATE_EDIT_MODAL } from "@/constants";

const SLUG = SALESMAN_CREATE_ADVERTISEMENT_TEMPLATE_EDIT_MODAL;

interface Props extends TClassName {
    templateValue: string;
    setTemplateValue: TState<string>;
}

const Content: FC<Props> = ({ className, setTemplateValue, templateValue }) => {
    const hideModal = useModalStore(hideModalSelector);
    const templateType = useCreateAdvertisement(templateEditTypeSelector);
    const updateAdvTemplatesMutation = useUpdateAdvTemplates(
        templateType as TTemplateEditType,
    );

    const renderTitle =
        templateType === "conditions"
            ? "Изменить шаблон условий заказа"
            : templateType === "instructions"
              ? "Изменить шаблон инструкций выкупа"
              : "Изменить шаблон критериев отзыва";

    const handleChange: ChangeEventHandler<HTMLTextAreaElement> = (event) => {
        setTemplateValue(event.target.value);
    };
    const handleCancel: MouseEventHandler = () => {
        hideModal({ slug: SLUG });
    };
    const handleConfirm: MouseEventHandler = () => {
        updateAdvTemplatesMutation.mutate(
            templateValue.replace(/\r?\n/g, "\\n"),
            {
                onSuccess: () => {
                    toast.success("Шаблон успешно изменен");
                    hideModal({ slug: SLUG });
                },
                onError: () => {
                    toast.error("Что-то пошло не так \\:");
                },
            },
        );
    };

    return (
        <div className={cls.content}>
            <Typography size={22} font="Inter-B" tag="h2">
                {renderTitle}
            </Typography>
            <Textarea
                value={templateValue}
                onChange={handleChange}
                placeholder="Введите новый шаблон"
                wrapperCls={cls.textarea_wrapper}
                textareaCls={cls.textarea}
            />
            <div className={cn(cls.actions)}>
                <Button
                    size="mid"
                    theme="outline"
                    className={cn(cls.btn)}
                    onClick={handleCancel}
                >
                    Отмена
                </Button>
                <Button
                    size="mid"
                    theme="fill"
                    className={cn(cls.btn)}
                    onClick={handleConfirm}
                >
                    Сохранить
                </Button>
            </div>
        </div>
    );
};

export { Content };
