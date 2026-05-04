import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["@chakra-ui/react"],
  },
  env: {
    PUBLIC_API_DOMAIN: process.env.PUBLIC_API_DOMAIN,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/afnenv/**",
      },
    ],
  },
};

export default nextConfig;
