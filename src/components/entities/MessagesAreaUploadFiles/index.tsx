"use client";
import { FC } from "react";
import { TChatMessageUserUploadedFile, TClassName } from "@/types";
import { cn } from "@/lib";
import Image from "next/image";
import { Typography } from "@/components/ui";
import Link from "next/link";
import { ActionArrowIcon } from "@/icons";
import { useModalStore } from "@/store";
import { SALESMAN_RANSOMS_USER_UPLOAD_FILE_MODAL } from "@/constants";
import cls from "./index.module.scss";
import { ChatAvatarItem } from "../ChatAvatarItem";

interface Props extends TClassName, TChatMessageUserUploadedFile {
    userIsOnline: boolean;
    whoReading: "reading-salesman" | "reading-user";
}
const ChatUploadFilesItem: FC<Props> = ({
    className,
    whoReading,
    message: {
        files,
        userInfo: { avatarImage, name },
    },
    type,
    userIsOnline,
}) => {
    const showModal = useModalStore((state) => state.showModal);
    const handleClick = () => {
        whoReading === "reading-salesman" &&
            showModal({ slug: SALESMAN_RANSOMS_USER_UPLOAD_FILE_MODAL });
    };

    return (
        <div className={cn(cls.wrapper, [className, cls[whoReading]])}>
            <ChatAvatarItem
                className={cn(cls.avatar)}
                avatar={avatarImage}
                isOnline={userIsOnline}
            />
            <div className={cn(cls.content)}>
                <Typography font="Inter-M" size={14} tag="h2">
                    {name}
                </Typography>
                <ul className={cn(cls.group)}>
                    {files.map(({ fileURL, name, size }) => {
                        return (
                            <li
                                className={cn(cls.item)}
                                key={name + size}
                                onClick={handleClick}
                            >
                                <Image
                                    src={"/images/shared/file-loaded.svg"}
                                    alt="Файл загружен"
                                    width={38}
                                    height={38}
                                />
                                <div className={cn(cls.info)}>
                                    <Typography
                                        font="Inter-M"
                                        size={14}
                                        tag="h3"
                                    >
                                        {name}
                                    </Typography>
                                    <Typography
                                        font="Inter-M"
                                        size={14}
                                        tag="h4"
                                    >
                                        {size}
                                    </Typography>
                                </div>
                                <Link
                                    href={fileURL}
                                    download={name}
                                    className={cn(cls.download_file)}
                                >
                                    <ActionArrowIcon color="var(--black-200-opacity-50)" />
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export { ChatUploadFilesItem };
