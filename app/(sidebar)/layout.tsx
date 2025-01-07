import { FC, Suspense } from "react";
import { SidebarLayout } from "@/components/layouts/Sidebar";
import { TChildren } from "@/types";

interface Props extends TChildren {}
const Sidebar: FC<Props> = ({ children }) => {
    return (
        <Suspense fallback={<></>}>
            <SidebarLayout>{children}</SidebarLayout>
        </Suspense>
    );
};

export default Sidebar;
