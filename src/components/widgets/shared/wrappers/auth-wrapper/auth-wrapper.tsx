"use client";
import { PageLoader } from "@/components/ui/loaders";
import { ROUTES } from "@/constants";
import { useSessionQuery } from "@/hooks/api/auth";
import {
    isSwitchRedirectSelector,
    profileSelector,
    setProfileSelector,
    setUserIdSelector,
    useProfile,
} from "@/store/useProfile";
import { RoleSlug } from "@/types/api";
import { reverse } from "dns";
import { useRouter } from "next/navigation";
import router from "next/router";
import React, { useEffect } from "react";
import { isError } from "util";
import profile from "../../../../../../_pages/salesman/profile";

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
    const profile = useProfile(profileSelector);
    const setUserId = useProfile(setUserIdSelector);
    const setProfile = useProfile(setProfileSelector);
    const { data, isLoading, isError } = useSessionQuery();
    const router = useRouter();
    const pushToRegEnd = () => {
        router.push(
            `${ROUTES[data?.role.slug === "buyer" ? "BUYER" : "SALESMAN"].REGISTRATION}?currentStep=end`,
        );
    };
    const isSwitchRedirect = useProfile(isSwitchRedirectSelector);

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
                console.log(1);
                pushToRegEnd();
            } else if (!isSwitchRedirect) {
                router.push(
                    sellerRedirectLink && data.role.slug === "seller"
                        ? sellerRedirectLink
                        : (redirectLink ?? ROUTES.MAIN),
                );
            }
        } else if (data) {
            if (!data.is_configured) {
                pushToRegEnd();
                console.log(3);
            } else if (reverse && !profile) {
                console.log(4);
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
