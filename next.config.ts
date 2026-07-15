import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  typescript: {
    // During transition/build verification we want strict types, but we'll keep check active.
    ignoreBuildErrors: false,
  },
};

export default nextConfig;
