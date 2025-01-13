"use client";
import { FC } from "react";
import { TChildren, TClassName } from "@/types";
import { cn } from "@/lib";
import { TModalSlug } from "@/store/useModalStore";
import { useModalBase } from "@/hooks";
import { PortalWrapper } from "../PortalWrapper";
import cls from "./index.module.scss";

interface Props extends TClassName, TChildren, TModalSlug {
    onClose?: () => void;
}
// slug - Уникальный идентификатор для конкретной модалки (ID)
const ModalBase: FC<Props> = ({ children, className, slug, onClose }) => {
    const { modalState, visibleTransition, handleClose } = useModalBase({
        slug,
    });

    const handleWrapperClick = () => {
        onClose && onClose();
        handleClose();
    };

    return (
        <PortalWrapper selector="#modals">
            {modalState ? (
                <section
                    onClick={handleWrapperClick}
                    className={cn(cls.wrapper, [className], {
                        [cls.visible]: visibleTransition,
                    })}
                >
                    <div
                        className={cls.content}
                        onClick={(e) => {
                            e.stopPropagation();
                        }}
                    >
                        {children}
                    </div>
                </section>
            ) : (
                <></>
            )}
        </PortalWrapper>
    );
};
export { ModalBase };
