import { cn } from "@/lib";
import { ExpandArrowIcon } from "@/icons";
import { Typography } from "@/components/ui";
import { useRouter } from "next/navigation";
import { FC } from "react";
import { TChildren, TClassName } from "@/types";
import { useScreen } from "@/hooks";
import cls from "./index.module.scss";

interface Props extends TClassName, TChildren {
    href?: string;
    hideWhen?: number;
}
const BackButton: FC<Props> = ({ className, children, href, hideWhen }) => {
    const router = useRouter();
    const handleClick = () => {
        router.push(href || "/");
    };
    const width = useScreen();

    const isVisible = hideWhen ? width > hideWhen : true;

    return (
        <>
            {isVisible && (
                <button
                    className={cn(cls.btn, [className])}
                    onClick={handleClick}
                >
                    <ExpandArrowIcon
                        color="var(--black-opacity-60)"
                        className={cn(cls.icon)}
                    />
                    <Typography tag="h4" font="Inter-R" size={16}>
                        {children}
                    </Typography>
                </button>
            )}
        </>
    );
};

export { BackButton };
