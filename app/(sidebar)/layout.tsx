import { FC, Suspense } from "react";
import { SidebarLayout } from "@/components/layouts/Sidebar";
import { TChildren } from "@/types";
import { NotificationsLayout } from "@/components/layouts/Notifications";

interface Props extends TChildren {}
const Sidebar: FC<Props> = ({ children }) => {
    return (
        <Suspense fallback={<></>}>
            <NotificationsLayout>
                <SidebarLayout>{children}</SidebarLayout>
            </NotificationsLayout>
        </Suspense>
    );
};

export default Sidebar;
