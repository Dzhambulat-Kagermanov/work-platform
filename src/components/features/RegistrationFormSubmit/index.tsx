import { ButtonHTMLAttributes, FC, MouseEvent } from "react";
import { Button } from "@/components/ui";
import cls from "./index.module.scss";
import { cn } from "@/lib";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}
const RegistrationFormSubmit: FC<Props> = ({
    className,
    children,
    onClick,
    ...other
}) => {
    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
        onClick && onClick(e);
    };

    return (
        <Button
            wFull
            size="mid"
            theme="fill"
            onClick={handleClick}
            className={cn(cls.btn, [className])}
            {...other}
        >
            Далее
        </Button>
    );
};

export { RegistrationFormSubmit };
