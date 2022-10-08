/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ["www.instagram.com"],
  },
};

module.exports = nextConfig;
