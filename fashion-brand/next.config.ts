import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  trailingSlash: false,
  distDir: '.next',
  assetPrefix: '',
};

export default nextConfig;
