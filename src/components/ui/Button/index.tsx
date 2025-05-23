import { ButtonHTMLAttributes, CSSProperties, FC, ReactNode } from "react";
import { cn } from "@/lib";
import { Typography } from "../Typography";
import { TTag } from "@/types";
import cls from "./index.module.scss";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>, TTag {
    theme: "fill" | "outline" | "cancel";
    children: string | string[];
    size?: "big" | "mid" | "low";
    wFull?: boolean;
    primaryColor?: string;
    secondColor?: string;
    beforeIcon?: ReactNode;
    textClassName?: string;
}
const Button: FC<Props> = ({
    wFull,
    theme,
    className,
    primaryColor,
    secondColor,
    children,
    type,
    size = "big",
    tag = "button",
    beforeIcon,
    textClassName,
    ...other
}) => {
    const Tag = tag;

    return (
        //@ts-ignore
        <Tag
            {...(tag === "button" ? { type: type || "button" } : {})}
            className={cn(cls.button, [className, cls[theme], cls[size]], {
                [cls.wFull]: wFull,
            })}
            style={
                {
                    "--primary-color":
                        theme === "fill"
                            ? primaryColor || "var(--purple-300)"
                            : primaryColor || "var(--white-100)",
                    "--second-color":
                        theme === "outline"
                            ? secondColor || "var(--purple-300)"
                            : secondColor || "var(--white-100)",
                } as CSSProperties
            }
            {...(tag === "button" ? other : {})}
        >
            {beforeIcon}
            <Typography
                font="Inter-SB"
                size={size === "big" || size === "mid" ? 16 : 14}
                className={textClassName}
            >
                {children}
            </Typography>
        </Tag>
    );
};

export { Button };
