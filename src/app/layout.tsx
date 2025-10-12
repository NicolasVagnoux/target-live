import type { Metadata } from "next";
import "./globals.scss";
import Head from "next/head";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

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
      <body>
        <Header />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
