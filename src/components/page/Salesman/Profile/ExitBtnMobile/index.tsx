"use client";
import { FC, MouseEventHandler } from "react";
import { AccountExit } from "@/components/features/AccountExit";
import { cn } from "@/lib";
import { TClassName } from "@/types";
import { EXIT_ACCOUNT_MODAL } from "@/constants";
import { useModalStore } from "@/store";
import cls from "./index.module.scss";

interface Props extends TClassName {}
const ExitBtnMobile: FC<Props> = ({ className }) => {
    const showModal = useModalStore((state) => state.showModal);
    const handelClick: MouseEventHandler = () => {
        showModal({ slug: EXIT_ACCOUNT_MODAL });
    };
    return (
        <AccountExit
            className={cn(cls.btn, [className])}
            onClick={handelClick}
        />
    );
};

export { ExitBtnMobile };
