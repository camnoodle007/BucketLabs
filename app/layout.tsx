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
  title: "Bucket Labs — Where AI Meets Science",
  description:
    "Bucket Labs builds AI for crystal growth and for the knowledge a team already has. Explore BucketLabs.ai and Mymir.ai.",
  keywords: [
    "Bucket Labs",
    "AI",
    "science",
    "crystal growth",
    "predictive maintenance",
    "thermocouple drift",
    "knowledge management",
    "crystal manufacturing",
    "Mymir",
    "digital twin",
  ],
  authors: [{ name: "Bucket Labs" }],
  openGraph: {
    title: "Bucket Labs — Where AI Meets Science",
    description:
      "AI for crystal growth, and for the knowledge a team already has.",
    type: "website",
    siteName: "Bucket Labs",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bucket Labs — Where AI Meets Science",
    description:
      "AI for crystal growth, and for the knowledge a team already has.",
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
