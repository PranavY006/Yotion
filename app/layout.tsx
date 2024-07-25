/* trunk-ignore-all(prettier) */
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { url } from "inspector";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yotion",
  description:
    "To create a workspace that is more than just a place to work. as Pranav yamagekarkars portfolio",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/logo.svg",
        href: "/logo.svg",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/logo-dark.svg",
        href: "/logo-dark.svg",
      },

    ]
  }
  };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}