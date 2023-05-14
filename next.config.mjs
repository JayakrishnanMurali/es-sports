/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image-cdn.essentiallysports.com",
        port: "",
      },
    ],
  },
}

export default nextConfig
