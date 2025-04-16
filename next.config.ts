import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        // or with newer Next.js versions:
        remotePatterns: [
            {
                protocol: "https",
                hostname: "basket-1.wbbasket.ru",
                port: "",
                pathname: "/**", // Разрешает все подпути
            },
        ],
    },
};

export default nextConfig;
