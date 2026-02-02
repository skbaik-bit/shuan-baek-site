import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sunkee — Profile",
  description: "One-page profile for networking",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-[#05060a] text-white antialiased">
        {children}
      </body>
    </html>
  );
}
