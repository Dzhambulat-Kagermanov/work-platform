"use client";
import { FC, useRef } from "react";
import { TClassName, TUserInfo } from "@/types";
import { cn } from "@/lib";
import Image from "next/image";
import { Typography } from "@/components/ui";
import cls from "./index.module.scss";
import { useUpdateAvatarMutation } from "@/hooks/api/auth";

interface Props extends TClassName, Pick<TUserInfo, "avatarImage" | "name"> {
    withoutAvatarChange?: boolean;
}
const Avatar: FC<Props> = ({
    avatarImage,
    name,
    className,
    withoutAvatarChange,
}) => {

    const inputRef = useRef<HTMLInputElement>(null);

    const { mutate: mutateUpdateAvatar, isPending } = useUpdateAvatarMutation();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (isPending) {
            return;
        }

        const files = e.target.files;

        if (!files || !files.length) {
            return;
        }


        mutateUpdateAvatar({
            avatar: files[0],
        });

    };

    return (
        <div
            className={cn(cls.wrapper, [className], {
                [cls.hasAvatar]: !!avatarImage,
            })}
        >
            <input type="file" hidden accept=".jpg,.png,.jpeg" ref={inputRef} onChange={handleChange} />
            {avatarImage ? (
                <Image src={avatarImage} alt={name} width={126} height={126} />
            ) : (
                <Typography font="Inter-M" size={60} tag="h2">
                    {name
                        .split(" ")
                        .map((part) => {
                            return part[0];
                        })
                        .join("")}
                </Typography>
            )}

            {!withoutAvatarChange && (
                <div className={cn(cls.photo_overlay)} onClick={() => inputRef.current?.click()}>
                    <Image
                        src={"/images/shared/camera.svg"}
                        alt="Загрузить фото"
                        width={32}
                        height={32}
                    />
                </div>
            )}
        </div>
    );
};

export { Avatar };
