import { FC } from "react";
import { TClassName } from "@/types";
import { cn } from "@/lib";
import Image from "next/image";
import cls from "./index.module.scss";

interface Props extends TClassName {
    src?: string;
}

const Avatar: FC<Props> = ({ className, src }) => {
    return (
        <div className={cn(cls.wrapper, [className])}>
            <Image
                src={src || "/images/stub/avatar.png"}
                width={100}
                height={100}
                alt="Аватар покупателя"
                className={cls.image}
            />
        </div>
    );
};

export { Avatar };
