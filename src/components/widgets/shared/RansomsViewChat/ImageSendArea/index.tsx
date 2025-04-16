"use client";
import { FC, useState } from "react";
import { TClassName } from "@/types";
import { cn } from "@/lib";
import cls from "./index.module.scss";
import {
    removeSendBuyerFileSelector,
    removeSendSalesmanFileSelector,
    sendBuyerFilesSelector,
    sendSalesmanFilesSelector,
    useChat,
} from "@/store/useChat";
import { TRole } from "..";
import Image from "next/image";
import { Typography } from "@/components/ui";
import { formatFileSize } from "@/lib/formatFileSize";
import { ExpandArrowIcon, PlusIcon } from "@/icons";

interface Props extends TClassName {
    role: TRole;
}

const ImageSendArea: FC<Props> = ({ className, role }) => {
    const removeFile = useChat(
        role === "salesman"
            ? removeSendSalesmanFileSelector
            : removeSendBuyerFileSelector,
    );

    const [isExpand, setIsExpand] = useState<boolean>(true);
    const sendImages = useChat(
        role === "salesman"
            ? sendSalesmanFilesSelector
            : sendBuyerFilesSelector,
    );

    return (
        <>
            {sendImages?.length ? (
                <section
                    className={cn(cls.wrapper, [className], {
                        [cls.is_expand]: isExpand,
                    })}
                >
                    <button
                        className={cls.expand_btn}
                        onClick={() => {
                            setIsExpand((cur) => !cur);
                        }}
                    >
                        <ExpandArrowIcon color="var(--purple-300)" />
                    </button>
                    <div className={cls.group_wrapper}>
                        <ul className={cls.group}>
                            {sendImages.map(
                                ({ data, name, size, filePreviewURL, id }) => (
                                    <li className={cls.item}>
                                        <Image
                                            src={filePreviewURL}
                                            alt={name}
                                            width={200}
                                            height={100}
                                        />
                                        <div className={cls.info}>
                                            <Typography
                                                font="Inter-R"
                                                tag="h2"
                                                size={16}
                                            >
                                                {name}
                                            </Typography>
                                            <Typography
                                                font="Inter-R"
                                                tag="h3"
                                                size={16}
                                            >
                                                {formatFileSize(size)}
                                            </Typography>
                                        </div>
                                        <button
                                            className={cls.btn}
                                            onClick={() => {
                                                removeFile(id);
                                            }}
                                        >
                                            <PlusIcon color="var(--purple-300)" />
                                        </button>
                                    </li>
                                ),
                            )}
                        </ul>
                    </div>
                </section>
            ) : null}
        </>
    );
};

export { ImageSendArea };
