import type { NextConfig } from "next";

/**
 * Hai chế độ build:
 * - Mặc định (Vercel): server đầy đủ — đăng nhập, soạn bài, thống kê, API.
 * - STATIC_EXPORT=1 (GitHub Pages, xem .github/workflows/pages.yml): xuất HTML tĩnh
 *   cho phần khách xem; phần quản trị vẫn ở Vercel.
 */
const isStaticExport = process.env.STATIC_EXPORT === "1";
const basePath = isStaticExport ? process.env.PAGES_BASE_PATH ?? "" : "";

const remotePatterns = [{ protocol: "https" as const, hostname: "cdn.hashnode.com" }];

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
    NEXT_PUBLIC_STATIC_EXPORT: isStaticExport ? "1" : "",
    // Bản tĩnh gửi form (đánh giá…) về server Vercel
    NEXT_PUBLIC_API_ORIGIN: isStaticExport ? process.env.API_ORIGIN ?? "" : "",
  },
  ...(isStaticExport
    ? {
        output: "export",
        basePath,
        trailingSlash: true,
        images: {
          loader: "custom",
          loaderFile: "./src/lib/image-loader.ts",
          remotePatterns,
        },
      }
    : {
        output: "standalone",
        images: { remotePatterns },
      }),
};

export default nextConfig;
