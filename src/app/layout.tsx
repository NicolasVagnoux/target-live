import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Target Live",
  description: "Target Live",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
