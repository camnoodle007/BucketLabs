import type { Metadata } from "next";
import { Inter, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-instrument-serif",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Bucket Labs — Where AI Meets Deep Science",
  description:
    "Bucket Labs builds AI-powered platforms that solve the hardest problems in materials science and knowledge management. Explore BucketLabs.ai and Mymir.ai.",
  keywords: [
    "Bucket Labs",
    "AI",
    "deep science",
    "cognitive simulation",
    "knowledge management",
    "crystal manufacturing",
    "Mymir",
    "digital twin",
  ],
  authors: [{ name: "Bucket Labs" }],
  openGraph: {
    title: "Bucket Labs — Where AI Meets Deep Science",
    description:
      "AI-powered platforms for materials science and knowledge management.",
    type: "website",
    siteName: "Bucket Labs",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bucket Labs — Where AI Meets Deep Science",
    description:
      "AI-powered platforms for materials science and knowledge management.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-background">
      <body
        className={`${inter.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
