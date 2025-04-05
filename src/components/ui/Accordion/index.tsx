import { FC, MouseEventHandler, ReactNode, useState } from "react";
import { TChildren, TClassName } from "@/types";
import { cn } from "@/lib";
import cls from "./index.module.scss";

interface Props extends TClassName, TChildren {
    defaultState?: boolean;
    title: ReactNode;
    icon?: { close: ReactNode; open: ReactNode };
    onOpen?: () => void;
    onClose?: () => void;
    headCls?: string;
    contentCls?: string;
}
const Accordion: FC<Props> = ({
    title,
    className,
    defaultState,
    children,
    icon,
    onClose,
    onOpen,
    contentCls,
    headCls,
}) => {
    const [isExpand, setIsExpand] = useState<boolean>(!!defaultState);

    const handleClick: MouseEventHandler = () => {
        setIsExpand((cur) => !cur);
        if (isExpand) {
            onClose && onClose();
        } else {
            onOpen && onOpen();
        }
    };

    return (
        <div
            className={cn(cls.wrapper, [className], {
                [cls.isOpen]: isExpand,
            })}
            onClick={handleClick}
        >
            <div className={cn(cls.head, [headCls])}>
                {title}
                {icon ? (
                    isExpand ? (
                        icon.open
                    ) : (
                        icon.close
                    )
                ) : (
                    <button className={cn(cls.default_btn)} />
                )}
            </div>
            <div className={cn(cls.content_wrapper, [contentCls])}>
                <div className={cn(cls.content)}>{children}</div>
            </div>
        </div>
    );
};

export { Accordion };
