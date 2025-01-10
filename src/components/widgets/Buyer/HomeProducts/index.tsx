import { FC } from "react";
import { TClassName } from "@/types";
import { Container } from "@/components/ui";
import { cn } from "@/lib";
import { Head } from "./Head";
import { Sort } from "./Sort";
import { Products } from "./Products";
import cls from "./index.module.scss";

interface Props extends TClassName {}
const HomeProducts: FC<Props> = async ({ className }) => {
    return (
        <Container tag="section" className={cn(cls.container, [className])}>
            <div className={cn(cls.content)}>
                <Head className={cn(cls.head)} />
                <Sort className={cn(cls.sort)} />
            </div>
            <Products className={cn(cls.products)} />
        </Container>
    );
};

export { HomeProducts };
