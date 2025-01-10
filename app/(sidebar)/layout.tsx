import { FC, Suspense } from "react";
import { SidebarLayout } from "@/components/layouts/Sidebar";
import { TChildren } from "@/types";
import { AuthWrapper } from "@/components/widgets/shared/wrappers";
import { ROUTES } from "@/constants";

interface Props extends TChildren {}
const Sidebar: FC<Props> = ({ children }) => {
    return (
        <Suspense fallback={<></>}>
            <AuthWrapper roles={["seller"]} redirectLink={ROUTES.SALESMAN.AUTH}>
                <SidebarLayout>{children}</SidebarLayout>
            </AuthWrapper>
        </Suspense>
    );
};

export default Sidebar;
