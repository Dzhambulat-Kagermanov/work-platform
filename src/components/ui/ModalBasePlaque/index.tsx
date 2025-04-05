import { FC } from "react";
import { TChildren, TClassName } from "@/types";
import { cn } from "@/lib";
import { TModalSlug } from "@/store/useModalStore";
import { useModalBase } from "@/hooks";
import { PortalWrapper } from "../PortalWrapper";
import cls from "./index.module.scss";

interface Props extends TClassName, TChildren, TModalSlug {}
const ModalBasePlaque: FC<Props> = ({ className, slug, children }) => {
    const { modalState, visibleTransition, handleClose } = useModalBase({
        slug,
    });

    return (
        <PortalWrapper selector="#modals">
            {modalState && (
                <section
                    className={cn(cls.wrapper, [className], {
                        [cls.visible]: visibleTransition,
                    })}
                    onClick={handleClose}
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
            )}
        </PortalWrapper>
    );
};

export { ModalBasePlaque };
