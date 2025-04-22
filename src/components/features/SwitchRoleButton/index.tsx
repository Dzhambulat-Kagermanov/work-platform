"use client";
import { FC } from "react";
import cls from "./index.module.scss";
import { TClassName } from "@/types";
import { Button } from "@/components/ui";
import { cn } from "@/lib";
import { useRoleSwitch } from "@/hooks/api/users/useRoleSwitch";
import { useQueryClient } from "@tanstack/react-query";
import { sessionQueryKeys } from "@/hooks/api/auth/useSessionQuery";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/constants";
import {
    profileSelector,
    setIsSwitchRedirectSelector,
    useProfile,
} from "@/store/useProfile";
import { useEffect } from "react";

interface Props extends TClassName {}
const SwitchRoleButton: FC<Props> = ({ className }) => {
    const profile = useProfile(profileSelector);
    const queryClient = useQueryClient();
    const roleSwitch = useRoleSwitch();
    const router = useRouter();
    const setIsSwitchRedirect = useProfile(setIsSwitchRedirectSelector);

    const handleClick = () => {
        setIsSwitchRedirect(true);
        roleSwitch.mutate(undefined, {
            onSettled: async () => {
                await queryClient.invalidateQueries({
                    queryKey: sessionQueryKeys,
                });
                if (profile?.role.slug === "buyer") {
                    router.push(ROUTES.SALESMAN.PROFILE);
                } else {
                    router.push(ROUTES.BUYER.ACCOUNT.VALUE);
                }
            },
        });
    };

    useEffect(() => {
        setIsSwitchRedirect(false);
    }, []);

    return (
        <Button
            className={cn(cls.wrapper, [className])}
            onClick={handleClick}
            theme="fill"
            size="low"
        >
            Переключиться на продавца
        </Button>
    );
};

export { SwitchRoleButton };
