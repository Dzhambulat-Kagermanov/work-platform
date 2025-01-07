import { FC } from "react";
import { TClassName } from "@/types";
import { cn } from "@/lib";
import { Socialbar } from "../Socialbar";
import { Navbar } from "../Navbar";
import { Contactsbar } from "../Contactsbar";
import cls from "./index.module.scss";

interface Props extends TClassName {}
const HeadPart: FC<Props> = ({ className }) => {
    return (
        <div className={cn(cls.head, [className])}>
            <Socialbar />
            <Navbar className={cn(cls.navbar)} />
            <Contactsbar className={cn(cls.contacts)} />
        </div>
    );
};

export { HeadPart };
