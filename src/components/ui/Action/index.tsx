"use client";
import { FC, MouseEvent, MouseEventHandler, useState } from "react";
import { TClassName } from "@/types";
import { Typography } from "@/components/ui";
import { ExpandArrowIcon } from "@/icons";
import { cn } from "@/lib";
import Link from "next/link";
import cls from "./index.module.scss";

export type TActionItemProps = {
    text: string;
    link?: string;
    onClick?: MouseEventHandler;
    disabled?: boolean;
};

interface Props extends TClassName {
    disabled?: boolean;
    actions: TActionItemProps[];
    actionBtnText: string;
    expandState?: boolean;
    onExpand?: () => void;
    onClose?: () => void;
}
const Action: FC<Props> = ({
    actionBtnText,
    actions,
    className,
    disabled,
    expandState,
    onExpand,
    onClose,
}) => {
    const [isExpand, setIsExpand] = useState<boolean>(false);

    const handleBtnClick: MouseEventHandler = () => {
        onExpand ? onExpand() : setIsExpand((cur) => !cur);
    };
    const handleLinkClick: MouseEventHandler = () => {
        onClose ? onClose() : setIsExpand(false);
    };

    return (
        <div
            className={cn(cls.wrapper, [className], {
                [cls.expand]:
                    expandState !== undefined ? expandState : isExpand,
            })}
        >
            <button
                className={cn(cls.actions_btn)}
                onClick={handleBtnClick}
                disabled={disabled}
            >
                <Typography
                    className="overflow-hidden text-ellipsis whitespace-nowrap"
                    font="Inter-SB"
                    size={14}
                >
                    {actionBtnText}
                </Typography>
                <ExpandArrowIcon
                    color="var(--grey-200)"
                    className={cn(cls.icon, ["min-w-3"])}
                />
            </button>
            <div className={cn(cls.actions_overlay)}>
                <div className={cn(cls.actions_wrapper)}>
                    <nav className={cn(cls.actions)}>
                        {actions.map(({ link, text, onClick, disabled }) => {
                            return (
                                <Typography
                                    other={{
                                        onClick: (e: MouseEvent) => {
                                            if (disabled) {
                                                return;
                                            }
                                            handleLinkClick(e);
                                            onClick && onClick(e);
                                        },
                                    }}
                                    key={`${text}${link}`}
                                    font="Inter-SB"
                                    size={12}
                                    className={cn(
                                        cls.action,
                                        disabled
                                            ? ["cursor-not-allowed opacity-50"]
                                            : ["cursor-pointer"],
                                    )}
                                >
                                    {link ? (
                                        <Link href={link}>{text}</Link>
                                    ) : (
                                        text
                                    )}
                                </Typography>
                            );
                        })}
                    </nav>
                </div>
            </div>
        </div>
    );
};

export { Action };
