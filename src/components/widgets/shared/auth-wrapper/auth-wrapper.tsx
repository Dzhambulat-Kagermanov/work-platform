"use client";
import { ROUTES } from "@/constants";
import { useSessionQuery } from "@/hooks/api/auth";
import { RoleSlug } from "@/types/api";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

type AuthWrapperProps = {
    roles?: RoleSlug[];
    redirectLink?: string;
    reverse?: boolean;
} & React.PropsWithChildren;

const AuthWrapper: React.FC<AuthWrapperProps> = ({
    roles,
    children,
    redirectLink,
    reverse,
}) => {
    const { data, isLoading, isError } = useSessionQuery();

    const router = useRouter();

    useEffect(() => {
        if (
            !reverse &&
            (isError || (roles && data && roles.indexOf(data.role.slug) === -1))
        ) {
            router.push(redirectLink ?? ROUTES.MAIN);
        } else if (reverse && !isLoading && data) {
            router.push(redirectLink ?? ROUTES.MAIN);
        }
    }, [isError, data, isLoading]);

    if (!reverse && (isLoading || isError || !data)) {
        return <></>;
    }

    return children;
};

export default AuthWrapper;
