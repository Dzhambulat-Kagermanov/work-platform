import { FC } from "react";
import { TChildren } from "@/types";
import { HeaderFooter } from "@/components/layouts/HeaderFooter";

interface Props extends TChildren {}
const Layout: FC<Props> = ({ children }) => {
    return <HeaderFooter>{children}</HeaderFooter>;
};

export default Layout;
