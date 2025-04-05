import { FC } from "react";
import { TClassName, TProductItemProps } from "@/types";
import { Button } from "@/components/ui";
import cls from "./index.module.scss";
import { cn } from "@/lib";
import { useCreateOrderMutation } from "@/hooks/api/orders";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/constants";
import { useSessionQuery } from "@/hooks/api/auth";

interface Props extends TClassName, Pick<TProductItemProps, "id"> {}
const ProductCardOrder: FC<Props> = ({ className, id }) => {
    const router = useRouter();
    const { data: userData } = useSessionQuery();
    const { mutate: mutateCreateOrder, isPending } = useCreateOrderMutation();

    const userRoleCheck = !userData || userData.role.slug !== "seller";

    const handleClick = () => {
        if (!userRoleCheck) {
            return;
        }

        mutateCreateOrder(id, {
            onSuccess: () => {
                router.push(ROUTES.BUYER.DELIVERY);
            },
        });
    };
    return (
        <Button
            theme="fill"
            onClick={handleClick}
            disabled={isPending || !userRoleCheck}
            className={cn(cls.btn, [className])}
        >
            Заказать
        </Button>
    );
};

export { ProductCardOrder };
