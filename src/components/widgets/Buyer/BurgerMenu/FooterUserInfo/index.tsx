import { FC } from "react";
import { TClassName } from "@/types";
import Image from "next/image";
import { Typography } from "@/components/ui";
import { cn } from "@/lib";
import cls from "./index.module.scss";

interface Props extends TClassName {
    name: string;
    phone: string;
    image: string;
}
const FooterUserInfo: FC<Props> = ({ image, name, phone, className }) => {
    return (
        <div className={cn(cls.wrapper, [className])}>
            <Image src={image} alt="Аватар" width={40} height={40} />
            <div className={cn(cls.content)}>
                <Typography font="Inter-SB" size={14} tag="h2">
                    {name}
                </Typography>
                <Typography font="Inter-R" size={14} tag="h3">
                    {phone}
                </Typography>
            </div>
        </div>
    );
};

export { FooterUserInfo };
