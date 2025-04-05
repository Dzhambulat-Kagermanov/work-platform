import { ButtonHTMLAttributes, FC } from "react";
import { Button } from "@/components/ui";
import { cn } from "@/lib";
import { useRouter } from "next/navigation";
import cls from "./index.module.scss";
import { ROUTES } from "@/constants";
import { useSessionQuery } from "@/hooks/api/auth";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}
const AccountBalanceMore: FC<Props> = ({ className, children, ...other }) => {
    const { data: userData } = useSessionQuery();

    const router = useRouter();
    const handleClick = () => {
        router.push(
            userData && userData.role.slug === "seller"
                ? ROUTES.SALESMAN.BALANCE.VALUE
                : ROUTES.BUYER.ACCOUNT.BALANCE,
        );
    };

    return (
        <Button
            secondColor="var(--green-100)"
            theme="outline"
            size="low"
            className={cn(cls.btn, [className])}
            onClick={handleClick}
            {...other}
        >
            Подробнее
        </Button>
    );
};

export { AccountBalanceMore };
