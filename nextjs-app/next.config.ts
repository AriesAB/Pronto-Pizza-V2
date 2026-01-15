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
    'localhost',
    '127.0.0.1',
    '*.replit.dev',
    '*.spock.replit.dev',
    '*.repl.co',
  ],
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
