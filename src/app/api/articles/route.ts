import { NextResponse } from "next/server";
import { listDbArticles, saveDbArticle } from "@/lib/server/articles";

// Bản tĩnh trên GitHub Pages đọc danh sách bài đã đăng từ đây (chỉ đọc, chỉ bài "published")
const PUBLIC_READ_ORIGINS = ["https://hoangcaster-999.github.io"];

function corsHeaders(request: Request): Record<string, string> {
  const origin = request.headers.get("origin") ?? "";
  return PUBLIC_READ_ORIGINS.includes(origin) ? { "Access-Control-Allow-Origin": origin, Vary: "Origin" } : {};
}

export async function GET(request: Request) {
  const headers = corsHeaders(request);
  try {
    const articles = await listDbArticles();
    return NextResponse.json({ articles }, { headers });
  } catch {
    return NextResponse.json({ articles: [] }, { headers });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const article = await saveDbArticle({
      id: typeof body.id === "string" ? body.id : undefined,
      title: String(body.title ?? ""),
      image: String(body.image ?? ""),
      content: String(body.content ?? ""),
      category: String(body.category ?? ""),
    });
    return NextResponse.json({ ok: true, article });
  } catch {
    return NextResponse.json(
      { ok: false, message: "Không lưu được bài viết." },
      { status: 500 },
    );
  }
}
