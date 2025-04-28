import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**", // Разрешает все домены
                port: "",
                pathname: "**", // Разрешает все пути
            },
        ],
    },
};

export default nextConfig;
