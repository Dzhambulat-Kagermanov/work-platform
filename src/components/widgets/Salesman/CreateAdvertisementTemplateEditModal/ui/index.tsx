"use client";
import { FC, useState } from "react";
import cls from "./index.module.scss";
import { TClassName } from "@/types";
import { ModalBase } from "@/components/ui";
import { cn } from "@/lib";
import { SALESMAN_CREATE_ADVERTISEMENT_TEMPLATE_EDIT_MODAL } from "@/constants";
import { Content } from "./Content";

interface Props extends TClassName {}

const CreateAdvertisementTemplateEditModal: FC<Props> = ({ className }) => {
    const [templateValue, setTemplateValue] = useState<string>("");

    return (
        <ModalBase
            onClose={() => {
                setTemplateValue("");
            }}
            slug={SALESMAN_CREATE_ADVERTISEMENT_TEMPLATE_EDIT_MODAL}
            className={cn(cls.wrapper, [className])}
        >
            <Content
                setTemplateValue={setTemplateValue}
                templateValue={templateValue}
            />
        </ModalBase>
    );
};

export { CreateAdvertisementTemplateEditModal };
