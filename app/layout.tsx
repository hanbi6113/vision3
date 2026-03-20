// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import SiteHeader from "@/app/components/common/site-header";

export const metadata: Metadata = {
  title: "Vision3",
  description: "Vision3 OTT",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="bg-[#050608] text-white">
        <SiteHeader />
        <div className="pt-12">{children}</div>
      </body>
    </html>
  );
}