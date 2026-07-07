import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://daniel0629.vercel.app"),
  title: "Daniel Serrano",
  description: "Full Stack && Web3 Developer",
  keywords: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node",
    "Next",
    "Blockchain",
    "Smart Contract",
    "Solidity",
    "Web3.js",
  ],
  authors: [{ name: "Daniel Serrano" }],
  openGraph: {
    title: "Full Stack && Web3 Developer",
    description:
      "I am a highly skilled blockchain and full stack developer with extensive experience in designing and implementing complex decentralized applications and web solutions.",
    url: "https://daniel0629.vercel.app/",
    siteName: "Daniel's Portfolio",
    images: ["/images/bg.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
