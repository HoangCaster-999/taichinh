/**
 * Thêm basePath cho đường dẫn nội bộ ("/images/…") khi chạy ở thư mục con
 * (GitHub Pages: /taichinh). Trên Vercel basePath rỗng nên trả về nguyên vẹn.
 * Link của next/link tự thêm basePath; hàm này dành cho ảnh và CSS background.
 */
export function withBasePath(src: string): string {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  if (!basePath || !src.startsWith("/") || src.startsWith("//") || src.startsWith(basePath + "/")) {
    return src;
  }
  return basePath + src;
}
