import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Northstar School OS — A clearer direction for your school",
  description: "Connected school management for people, academics, attendance and fees. Explore Northstar School OS and compare predictable licensing options.",
  icons: { icon: "/favicon.svg" },
};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>) { return <html lang="en"><body>{children}</body></html>; }
