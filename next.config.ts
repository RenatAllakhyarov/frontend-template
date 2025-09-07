
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["miniature-prod.moysklad.ru", "api.moysklad.ru"],
  },
  async rewrites() {
    return [
      {
        source: "/products",
        destination: "http://localhost:3000/products",
      },
      {
        source: "/image-by-url",
        destination: "http://localhost:3000/image-by-url",
      },
      {
        source: "/external",
        destination: "http://localhost:3000/external",
      },
    ];
  },
};

export default nextConfig;
