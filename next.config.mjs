/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    optimizeCss: false,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV !== 'development',
  },
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
