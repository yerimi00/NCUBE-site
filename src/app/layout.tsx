import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "N-CUBE · 한국외대 IT 학회",
  description: "N-CUBE : New, Next, Nexus — 한국외대 컴퓨터공학부 IT 학회",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
