import { FC, MouseEventHandler } from "react";
import { TClassName } from "@/types";
import { Typography } from "@/components/ui";
import { cn } from "@/lib";
import Link from "next/link";
import { TSalesmanHomePageType } from "..";
import cls from "./index.module.scss";
import { PlusIcon } from "@/icons";
import { useScreen } from "@/hooks";
import { SM_MID } from "@/constants";

interface Props extends TClassName {
    slug?: TSalesmanHomePageType;
    text: string;
    activeSlug: TSalesmanHomePageType;
    selectedProducts: number;
}
const Item: FC<Props> = ({
    activeSlug,
    slug,
    text,
    className,
    selectedProducts,
}) => {
    const width = useScreen();
    const handleClick: MouseEventHandler = () => {};
    return (
        <Typography
            font="Inter-SB"
            size={14}
            className={cn(cls.wrapper, [className], {
                [cls.active]: activeSlug === slug,
            })}
        >
            <Link href={slug ? `/salesman?homePageType=${slug}` : "/salesman"}>
                {text}
            </Link>
            {/* {selectedProducts && width > SM_MID ? (
                <button
                    className={cn(cls.selected_products)}
                    onClick={handleClick}
                >
                    <Typography font="Inter-M" size={12} tag="span">
                        Выбран {selectedProducts} товар
                    </Typography>
                    <PlusIcon color="var(--blue-100)" />
                </button>
            ) : null} */}
        </Typography>
    );
};

export { Item };
