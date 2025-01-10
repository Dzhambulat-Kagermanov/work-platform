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
    isRegister?: boolean;
} & React.PropsWithChildren;

const AuthWrapper: React.FC<AuthWrapperProps> = ({
    roles,
    children,
    redirectLink,
    reverse,
}) => {
    const { data, isLoading, isError } = useSessionQuery();

    const router = useRouter();

    const pushToRegEnd = () => {
        router.push(
            `${ROUTES[data?.role.slug === "buyer" ? "BUYER" : "SALESMAN"].REGISTRATION}?currentStep=end`,
        );
    };

    useEffect(() => {
        if (
            !reverse &&
            (isError ||
                (roles && data && roles.indexOf(data.role.slug) === -1))
        ) {
            if (!data?.is_configured) {
                pushToRegEnd();
            } else {
                router.push(redirectLink ?? ROUTES.MAIN);
            }
        } else if (data) {
           if (!data.is_configured) {
                pushToRegEnd();
            }
        }
        if (!isLoading) {
        }
    }, [isError, data, isLoading]);

    if (isLoading && !reverse) {
        return (
            <div className="w-full h-[80dvh] min-h-[250px] flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="animate-spin"><path d="M21 12a9 9 0 1 1-6.219-8.56" /></svg>
            </div>
        )
    }

    if (!reverse && (isError || !data)) {
        return <></>;
    }

    return children;
};

export default AuthWrapper;
