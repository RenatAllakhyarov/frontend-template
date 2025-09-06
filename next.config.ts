import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    reactStrictMode: false,
    images: {
        domains: ["miniature-prod.moysklad.ru"],
    },
};

export default nextConfig;
