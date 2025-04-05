"use client";
import { ButtonHTMLAttributes, FC } from "react";
import { Button } from "@/components/ui";
import { cn } from "@/lib";
import cls from "./index.module.scss";
import { useModalStore } from "@/store";
import { EXIT_ACCOUNT_MODAL } from "@/constants";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}
const AccountExit: FC<Props> = ({ className, children, ...other }) => {
    const showModal = useModalStore((state) => state.showModal);
    const handleClick = () => {
        showModal({ slug: EXIT_ACCOUNT_MODAL });
    };

    return (
        <Button
            {...other}
            secondColor="var(--red-100)"
            className={cn(cls.btn, [className])}
            theme="outline"
            size="low"
            onClick={handleClick}
        >
            Выйти из аккаунта
        </Button>
    );
};

export { AccountExit };
