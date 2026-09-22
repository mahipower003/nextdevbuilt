/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  async redirects() {
    return [
      { source: '/contact', destination: '/discuss', permanent: true },
      { source: '/services', destination: '/what-we-solve', permanent: true },
    ];
  },
};

module.exports = nextConfig;
