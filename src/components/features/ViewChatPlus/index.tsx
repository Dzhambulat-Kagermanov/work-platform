"use client";
import { ChangeEventHandler, FC } from "react";
import { TClassName } from "@/types";
import { cn } from "@/lib";
import { PlusIcon } from "@/icons";
import cls from "./index.module.scss";
import { TRole } from "@/components/widgets/shared/RansomsViewChat";
import {
    setSendBuyerFilesSelector,
    setSendSalesmanFilesSelector,
    useChat,
} from "@/store/useChat";
import { nanoid } from "nanoid";

interface Props extends TClassName {
    role: TRole;
}
const ViewChatPlus: FC<Props> = ({ className, role }) => {
    const setSendFiles = useChat(
        role === "buyer"
            ? setSendBuyerFilesSelector
            : setSendSalesmanFilesSelector,
    );

    const handleChangeFile: ChangeEventHandler<HTMLInputElement> = (event) => {
        const files = event.target.files;
        if (files) {
            const file = files[0];
            const blob = new Blob([file], { type: file.type });
            const filePreviewURL = URL.createObjectURL(file);

            setSendFiles({ data: blob, id: nanoid(), filePreviewURL });
        }
    };

    return (
        <>
            <label role="button" className={cn(cls.btn, [className])}>
                <PlusIcon className={cn(cls.icon)} color="var(--purple-300)" />
                <input
                    className="hidden"
                    type="file"
                    accept=""
                    onChange={handleChangeFile}
                />
            </label>
        </>
    );
};

export { ViewChatPlus };
