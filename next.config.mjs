import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
];

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  webpack(config) {
    config.resolve.alias["@"] = root;
    return config;
  },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
  async redirects() {
    // Canonical host: www.veldriva.com -> veldriva.com (also configure in Vercel Domains).
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.veldriva.com" }],
        destination: "https://veldriva.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
