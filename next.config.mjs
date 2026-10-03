/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ["image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.jsdelivr.net",
      },
      {
        protocol: "https",
        hostname: "rollupjs.org",
      },
      {
        protocol: "https",
        hostname: "turbo.build",
      },
      {
        protocol: "https",
        hostname: "api.iconify.design",
      },
      {
        protocol: "https",
        hostname: "www.trychroma.com",
      },
      {
        protocol: "https",
        hostname: "groq.com",
      },
      {
        protocol: "https",
        hostname: "prettier.io",
      },
    ],
  },
};

export default nextConfig;
