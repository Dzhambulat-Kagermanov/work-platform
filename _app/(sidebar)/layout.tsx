import { FC, Suspense } from "react";
import { SidebarLayout } from "@/components/layouts/Sidebar";
import { TChildren } from "@/types";
import { AuthWrapper } from "@/components/widgets/shared/wrappers";
import { ROUTES } from "@/constants";
import { NotificationsLayout } from "@/components/layouts/Notifications";

interface Props extends TChildren {}
const Sidebar: FC<Props> = ({ children }) => {
    return (
        <Suspense fallback={<></>}>
            <AuthWrapper roles={["seller"]} redirectLink={ROUTES.SALESMAN.AUTH}>
                <NotificationsLayout>
                    <Suspense fallback={<></>}>
                        <SidebarLayout>{children}</SidebarLayout>
                    </Suspense>
                </NotificationsLayout>
            </AuthWrapper>
        </Suspense>
    );
};

export default Sidebar;
