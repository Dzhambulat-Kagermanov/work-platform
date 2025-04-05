import type { Metadata } from "next";
import "@/styles/index.scss";
import { QueryClientLayout } from "@/components/layouts/QueryClient";
import { Toaster } from "react-hot-toast";
import { UnauthenticatedModal } from "@/components/widgets/shared/UnauthenticatedModal";

export const dynamic = "auto";
export const dynamicParams = true;
export const revalidate = false;
export const fetchCache = "auto";

export const metadata: Metadata = {
    title: "Платформа",
    description: "Описание",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <Toaster />
                <QueryClientLayout>
                    {children}
                    <UnauthenticatedModal />
                </QueryClientLayout>
                <div id="modals"></div>
            </body>
        </html>
    );
}
