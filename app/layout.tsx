import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CastraCloud — Open-source Cloud Security",
  description: "Open-source CSPM for discovering cloud risk, analyzing attack paths, and prioritizing security findings.",
  metadataBase: new URL("https://castracloud.dev")
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}