import { FC } from "react";
import { TClassName } from "@/types";
import { cn } from "@/lib";
import { Typography } from "@/components/ui";
import Image from "next/image";
import cls from "./index.module.scss";

interface Props extends TClassName {}
const Contactsbar: FC<Props> = ({ className }) => {
    return (
        <div className={cn(cls.wrapper, [className])}>
            <Typography
                className={cn(cls.title)}
                font="Inter-B"
                size={16}
                tag="h3"
            >
                Контакты
            </Typography>
            <ul className={cn(cls.row)}>
                <li className={cn(cls.column)}>
                    <Image
                        src="/images/shared/mail.svg"
                        alt="Почта"
                        width={17}
                        height={13}
                    />
                    <Typography font="Inter-R" size={14}>
                        contact@wbdiscount.pro
                    </Typography>
                </li>
                <li className={cn(cls.column)}>
                    <Image
                        src="/images/shared/phone.svg"
                        alt="Почта"
                        width={17}
                        height={17}
                    />
                    <Typography font="Inter-R" size={14}>
                        +7 (977) 687 58 92
                    </Typography>
                </li>
                <li className={cn(cls.column)}>
                    <Image
                        src="/images/shared/mark.svg"
                        alt="Почта"
                        width={14}
                        height={17}
                    />
                    <Typography font="Inter-R" size={14}>
                        Москва, ул. Мясницкая 19с1
                    </Typography>
                </li>
            </ul>
        </div>
    );
};

export { Contactsbar };
