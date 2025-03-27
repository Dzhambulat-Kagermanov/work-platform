"use client"
import { FC, useEffect } from "react"
import { TChildren, TClassName } from "@/types"
import { cn } from "@/lib"
import { TModalSlug } from "@/store/useModalStore"
import { useModalBase } from "@/hooks"
import { PortalWrapper } from "../PortalWrapper"
import cls from "./index.module.scss"

interface Props extends TClassName, TChildren, TModalSlug {
    onClose?: () => void
    disableClose?: boolean
}
// slug - Уникальный идентификатор для конкретной модалки (ID)
const ModalBase: FC<Props> = ({
    children,
    className,
    slug,
    onClose,
    disableClose,
}) => {
    const { modalState, visibleTransition, handleClose } = useModalBase({
        slug,
    })

    const handleWrapperClick = () => {
        if (disableClose) {
            return
        }
        handleClose()
    }

    useEffect(() => {
        if (!modalState) {
            onClose && onClose()

        }
    }, [modalState])

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
                            e.stopPropagation()
                        }}
                    >
                        {children}
                    </div>
                </section>
            ) : (
                <></>
            )}
        </PortalWrapper>
    )
}
export { ModalBase }
