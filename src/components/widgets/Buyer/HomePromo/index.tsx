"use client";
import { FC } from "react";
import { TClassName } from "@/types";
import { cn } from "@/lib";
import { Container } from "@/components/ui";
import cls from "./index.module.scss";
import { useScreen } from "@/hooks";
import { SM_BIG } from "@/constants";

interface Props extends TClassName {}
const HomePromo: FC<Props> = ({ className }) => {
    const width = useScreen();
    
    return (
        <Container tag="section" className={cn(cls.outerContainer, [className])}>
            <div className={cls.promoBox}>
                {width > SM_BIG ? (
                    <div 
                        className={cls.bannerImage} 
                        style={{ 
                            backgroundImage: "url('/images/home/promo/background-lg.png')",
                            aspectRatio: "2708/348" // Actual ratio of the desktop image
                        }} 
                        role="img"
                        aria-label="Акция"
                    />
                ) : (
                    <div 
                        className={cls.bannerImage} 
                        style={{ 
                            backgroundImage: "url('/images/home/promo/background-md.png')",
                            aspectRatio: "1035/510" // Actual ratio of the mobile image
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
