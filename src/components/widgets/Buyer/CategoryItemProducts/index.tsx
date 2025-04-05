import { FC } from "react";
import { TClassName } from "@/types";
import { cn } from "@/lib";
import { Content } from "./Content";
import { Head } from "./Head";
import cls from "./index.module.scss";

interface Props
    extends TClassName,
        Record<"categoryId" | "subcategory", string | undefined> {}
const CategoryItemProducts: FC<Props> = ({
    subcategory,
    categoryId,
    className,
}) => {
    return (
        <section className={cn(cls.wrapper, [className])}>
            <Head className={cn(cls.head)} />
            <Content
                categoryId={categoryId}
                subcategory={subcategory}
                className={cn(cls.content)}
            />
        </section>
    );
};

export { CategoryItemProducts };
