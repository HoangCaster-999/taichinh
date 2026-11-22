"use client";

import { withBasePath } from "./asset";

/** Loader cho bản tĩnh (GitHub Pages): không có server tối ưu ảnh, chỉ thêm basePath. */
export default function imageLoader({ src }: { src: string; width: number; quality?: number }): string {
  return withBasePath(src);
}
