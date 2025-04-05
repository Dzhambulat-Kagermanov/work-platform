import { FC } from "react";
import { cn } from "@/lib";
import { TClassName } from "@/types";
import Image from "next/image";
import cls from "./index.module.scss";
import { useScreen } from "@/hooks";

interface Props extends TClassName {}
const SignDesktopBackground: FC<Props> = ({ className }) => {
    const width = useScreen();
    return (
        <>
            {width >= 768 && (
                <div className={cn(cls.wrapper, [className])}>
                    <Image
                        src={"/images/salesman/auth/desktop-background.png"}
                        alt="Добро пожаловать"
                        width={720}
                        height={960}
                    />
                </div>
            )}
        </>
    );
};

export { SignDesktopBackground };
