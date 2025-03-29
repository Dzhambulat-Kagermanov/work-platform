"use client";
import { FC, MouseEventHandler } from "react";
import { TClassName } from "@/types";
import { cn } from "@/lib";
import { Logo } from "../../shared/Logo";
import { useModalStore } from "@/store";
import { ROUTES, SALESMAN_BURGER_MENU } from "@/constants";
import cls from "./index.module.scss";

interface Props extends TClassName {}
const MobileHeader: FC<Props> = ({ className }) => {
    const showModal = useModalStore((state) => state.showModal);
    const handleClick: MouseEventHandler = () => {
        showModal({ slug: SALESMAN_BURGER_MENU });
    };
    return (
        <header className={cn(cls.wrapper, [className])}>
            <button className={cn(cls.menu_open_btn)} onClick={handleClick}>
                <span />
                <span />
                <span />
            </button>
            <Logo link={ROUTES.MAIN} className={cn(cls.logo)} />
        </header>
    );
};

export { MobileHeader };
