import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://mumei-2d-animator-portfolio.netlify.app/"),
  title: "Mumei",
  description: "Animator & Character Designer",
 
  authors: [{ name: "Mumei" }],
  openGraph: {
    title: "Animator & Character Designer",
    url: "https://mumei-2d-animator-portfolio.netlify.app/",
    siteName: "Mumei's Portfolio"
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
