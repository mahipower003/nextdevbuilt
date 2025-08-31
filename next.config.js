/** @type {import('next').NextConfig} */
const nextConfig = {
  // Removing static export to allow dynamic routes to work properly
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
};

module.exports = nextConfig;
