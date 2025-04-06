"use client";
import {
    CSSProperties,
    FC,
    MouseEventHandler,
    useEffect,
    useRef,
    useState,
} from "react";
import { TClassName, TProductItemProps } from "@/types";
import { cn } from "@/lib";
import { Typography } from "@/components/ui";
import cls from "./index.module.scss";

interface Props
    extends TClassName,
        Pick<TProductItemProps, "productDescription"> {}
const Description: FC<Props> = ({ productDescription, className }) => {
    const MAX_LINES = 5;
    const LINE_HEIGHT = 1.8;
    const FONT_SIZE = 14;

    const [isExpand, setIsExpand] = useState<null | boolean>(null);
    const textRef = useRef<HTMLElement>(null);
    const handleClick: MouseEventHandler = () => {
        setIsExpand(true);
    };

    useEffect(() => {
        if (textRef.current) {
            textRef.current.offsetHeight >=
                MAX_LINES * LINE_HEIGHT * FONT_SIZE && setIsExpand(false);
        }
    }, []);

    return (
        <div
            className={cn(cls.wrapper, [className], {
                [cls.isExpand]: !!isExpand,
            })}
            style={
                {
                    "--max-lines": MAX_LINES,
                    "--line-height": LINE_HEIGHT,
                } as CSSProperties
            }
        >
            <div
                className={cn(cls.text_wrapper)}
                style={{
                    maxHeight: `${
                        isExpand
                            ? textRef.current?.offsetHeight
                            : MAX_LINES * LINE_HEIGHT * FONT_SIZE
                    }px`,
                }}
            >
                <Typography
                    //@ts-ignore
                    ref={textRef}
                    font="Inter-R"
                    size={FONT_SIZE}
                    tag="h2"
                >
                    {productDescription || "У данного товара нет описания :\\"}
                </Typography>
            </div>
            {isExpand !== null && !isExpand && (
                <button className={cn(cls.expand_btn)} onClick={handleClick}>
                    <Typography font="Inter-R" size={14}>
                        Развернуть
                    </Typography>
                </button>
            )}
        </div>
    );
};

export { Description };
