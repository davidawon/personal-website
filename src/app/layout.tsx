import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "David Awonaike | Analytics, Engineering & Innovation",
  description:
    "MS Business Analytics candidate at Purdue University. Full-stack developer, data analyst, and entrepreneur building at the intersection of technology and business.",
  keywords: [
    "David Awonaike",
    "Business Analytics",
    "Full Stack Developer",
    "Purdue University",
    "Data Analytics",
    "Portfolio",
  ],
  openGraph: {
    title: "David Awonaike | Analytics, Engineering & Innovation",
    description:
      "Full-stack developer, data analyst, and entrepreneur building at the intersection of technology and business.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <div className="grain" />
        {children}
      </body>
    </html>
  );
}
