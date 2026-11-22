/**
 * Riester-Rente bị thay thế bằng Quỹ đầu tư hưu trí (Altersvorsorgedepot) từ 1/1/2027.
 * Trước mốc này website hiển thị Riester; từ mốc này hiển thị sản phẩm mới.
 *
 * Mốc hiện tại: 22/11/2026 — hiển thị Quỹ đầu tư hưu trí ngay (theo yêu cầu),
 * không chờ đến 1/1/2027. Muốn quay lại Riester thì đặt mốc về tương lai.
 * Có thể ghi đè để xem trước bằng biến môi trường NEXT_PUBLIC_PENSION_SWITCH_AT
 * (ISO date, ví dụ "2026-01-01T00:00:00Z").
 */
const DEFAULT_SWITCH_AT = "2026-11-22T00:00:00Z";

const SWITCH_AT = new Date(process.env.NEXT_PUBLIC_PENSION_SWITCH_AT || DEFAULT_SWITCH_AT).getTime();

export const RIESTER_SLUG = "bao-hiem-huu-tri-riester";
export const ALTERSVORSORGE_SLUG = "quy-dau-tu-huu-tri";

/** true khi đã tới mốc chuyển sang Quỹ đầu tư hưu trí. Tính lại mỗi lần gọi. */
export function isAltersvorsorgeLive(now: Date = new Date()): boolean {
  return now.getTime() >= SWITCH_AT;
}

/**
 * Thông tin sản phẩm hưu trí đang áp dụng. Các thuộc tính là getter nên luôn
 * phản ánh thời điểm hiện tại, kể cả khi được import như một hằng số.
 */
export const pensionProduct = {
  get slug() {
    return isAltersvorsorgeLive() ? ALTERSVORSORGE_SLUG : RIESTER_SLUG;
  },
  get href() {
    return `/${pensionProduct.slug}`;
  },
  /** Nhãn nút ngắn (danh sách "Những lĩnh vực có thể bạn quan tâm"). */
  get buttonLabel() {
    return isAltersvorsorgeLive() ? "Quỹ đầu tư hưu trí" : "Bảo hiểm Riesterrente";
  },
  /** Nhãn trong menu. */
  get menuLabel() {
    return isAltersvorsorgeLive() ? "Quỹ đầu tư hưu trí" : "Bảo hiểm hưu trí Riester";
  },
  /** Tiêu đề thẻ bài viết. */
  get title() {
    return isAltersvorsorgeLive() ? "Quỹ đầu tư hưu trí - Altersvorsorgedepot" : "Bảo hiểm hưu trí Riester - Rente";
  },
};

export function isPensionSlug(slug: string): boolean {
  return slug === RIESTER_SLUG || slug === ALTERSVORSORGE_SLUG;
}

/**
 * Gắn getter cho slug/title/href của thẻ bài viết hưu trí để các danh sách bài viết
 * (thẻ "Bài viết khác…", archive, tìm kiếm) tự đổi theo thời điểm.
 * Các mục khác được trả về nguyên vẹn.
 */
export function withLivePension<T extends { slug: string; title: string; href?: string }>(item: T): T {
  if (!isPensionSlug(item.slug)) return item;
  const props: PropertyDescriptorMap = {
    slug: { get: () => pensionProduct.slug, enumerable: true, configurable: true },
    title: { get: () => pensionProduct.title, enumerable: true, configurable: true },
  };
  if ("href" in item) {
    props.href = { get: () => pensionProduct.href, enumerable: true, configurable: true };
  }
  return Object.defineProperties(item, props);
}
