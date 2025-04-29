"use client";
import React, { FC } from "react";
import { TClassName } from "@/types";
import { cn } from "@/lib";
import { Container } from "@/components/ui";
import cls from "./index.module.scss";
import { useScreen } from "@/hooks";
import { SM_BIG } from "@/constants";

interface Props extends TClassName {}
const HomePromo: FC<Props> = ({ className }) => {
    const [screenWidth, setScreenWidth] = React.useState<number | null>(null);
    const width = useScreen();

    React.useEffect(() => {
        // useScreen может возвращать 0 при SSR, поэтому сохраняем только валидное значение
        if (width > 0) setScreenWidth(width);
    }, [width]);

    // Не рендерим баннер до определения ширины экрана
    if (!screenWidth) return null;

    return (
        <Container tag="section" className={cn(cls.outerContainer, [className])}>
            <div className={cls.promoBox}>
                {screenWidth > SM_BIG ? (
                    <div
                        className={cls.bannerImage}
                        style={{
                            backgroundImage: "url('/images/home/promo/background-lg.png')",
                            aspectRatio: "2708/348"
                        }}
                        role="img"
                        aria-label="Акция"
                    />
                ) : (
                    <div
                        className={cls.bannerImage}
                        style={{
                            backgroundImage: "url('/images/home/promo/background-md.png')",
                            aspectRatio: "1035/510"
                        }}
                        role="img"
                        aria-label="Акция"
                    />
                )}
            </div>
        </Container>
    );
};

export { HomePromo };
