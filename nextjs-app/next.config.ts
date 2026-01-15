import type { NextConfig } from "next";

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
};

export default nextConfig;
