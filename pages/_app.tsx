import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { SidebarLayout } from "@/components/layouts/Sidebar";
import { HeaderFooter } from "@/components/layouts/HeaderFooter";
import { HeaderLayout } from "@/components/layouts/Header";
import { AuthWrapper } from "@/components/widgets/shared/wrappers";
import { ROUTES } from "@/constants";
import "@/styles/index.scss";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps, router }: AppProps) {
    const isHeaderFooter = ["/", "/buyer/account/balance"].includes(
        router.pathname,
    );
    const isSidebar = router.pathname.startsWith("/salesman");
    const isHeaderOnly = !isHeaderFooter && !isSidebar;

    let Layout = ({ children }: { children: React.ReactNode }) => (
        <>{children}</>
    );

    if (isHeaderFooter) {
        Layout = ({ children }) => <HeaderFooter>{children}</HeaderFooter>;
    } else if (isSidebar) {
        Layout = ({ children }) => (
            <AuthWrapper roles={["seller"]} redirectLink={ROUTES.SALESMAN.AUTH}>
                <SidebarLayout>{children}</SidebarLayout>
            </AuthWrapper>
        );
    } else if (isHeaderOnly) {
        Layout = ({ children }) => <HeaderLayout>{children}</HeaderLayout>;
    }

    return (
        <>
            <QueryClientProvider client={queryClient}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
                <Toaster />
                <div id="modals"></div>
            </QueryClientProvider>
        </>
    );
}

export default MyApp;
