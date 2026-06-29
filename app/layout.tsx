import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TikTok Shop 选品工具",
  description: "专业的 TikTok Shop 选品研究仪表盘",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="antialiased bg-zinc-950 text-white">
        {children}
      </body>
    </html>
  );
}