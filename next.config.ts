import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: { root: __dirname },
  reactStrictMode: true,
  images: {
    qualities: [75, 85, 90],
  },
};

export default nextConfig;
