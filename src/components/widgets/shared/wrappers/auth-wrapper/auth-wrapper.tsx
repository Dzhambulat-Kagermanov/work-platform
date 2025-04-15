"use client";
import { PageLoader } from "@/components/ui/loaders";
import { ROUTES } from "@/constants";
import { useSessionQuery } from "@/hooks/api/auth";
import {
    setProfileSelector,
    setUserIdSelector,
    useProfile,
} from "@/store/useProfile";
import { RoleSlug } from "@/types/api";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

type AuthWrapperProps = {
    roles?: RoleSlug[];
    redirectLink?: string;
    sellerRedirectLink?: string;
    reverse?: boolean;
    isRegister?: boolean;
} & React.PropsWithChildren;

const AuthWrapper: React.FC<AuthWrapperProps> = ({
    roles,
    children,
    redirectLink,
    reverse,
    sellerRedirectLink,
}) => {
    const setUserId = useProfile(setUserIdSelector);
    const setProfile = useProfile(setProfileSelector);
    const { data, isLoading, isError } = useSessionQuery();
    const router = useRouter();
    const pushToRegEnd = () => {
        router.push(
            `${ROUTES[data?.role.slug === "buyer" ? "BUYER" : "SALESMAN"].REGISTRATION}?currentStep=end`,
        );
    };

    useEffect(() => {
        if (data) {
            setProfile(data);
            setUserId(data.id);
        }
        if (
            !reverse &&
            (isError || (roles && data && roles.indexOf(data.role.slug) === -1))
        ) {
            if (!data?.is_configured) {
                pushToRegEnd();
            } else {
                router.push(
                    sellerRedirectLink && data.role.slug === "seller"
                        ? sellerRedirectLink
                        : (redirectLink ?? ROUTES.MAIN),
                );
            }
        } else if (data) {
            if (!data.is_configured) {
                pushToRegEnd();
            } else if (reverse) {
                router.push(
                    sellerRedirectLink && data.role.slug === "seller"
                        ? sellerRedirectLink
                        : (redirectLink ?? ROUTES.MAIN),
                );
            }
        }
        if (!isLoading) {
        }
    }, [isError, data, isLoading]);

    if (isLoading && !reverse) {
        return <PageLoader />;
    }

    if (!reverse && (isError || !data)) {
        return <></>;
    }

    return children;
};

export default AuthWrapper;
