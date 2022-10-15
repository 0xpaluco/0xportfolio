/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: { images: { allowFutureImage: true } },
  images: {
    domains: ['tailwindui.com', "cdn.discordapp.com", "gateway.ipfs.io", "localhost:5000"],
  },
}

module.exports = nextConfig
