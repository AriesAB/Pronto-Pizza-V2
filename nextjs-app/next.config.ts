import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  allowedDevOrigins: [
    'https://*.replit.dev',
    'https://*.spock.replit.dev',
    'https://*.repl.co',
  ],
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
