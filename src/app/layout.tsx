import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
import dotenv from "dotenv";

dotenv.config();
export const metadata: Metadata = {
  title: "Nama Website | Layanan Digital Terbaik untuk Bisnis Anda",
  description: "Tingkatkan bisnis Anda dengan layanan digital terbaik. SEO, Web Development, dan Optimasi Media Sosial dalam satu platform.",
  keywords: [
    "layanan digital",
    "jasa SEO profesional",
    "web development",
    "optimasi website",
    "startup digital",
    "teknologi bisnis",
  ],
  authors: [{ name: "Nama Kamu", url: "https://www.namasitus.com" }],
  openGraph: {
    title: "Nama Website | Layanan Digital Terbaik",
    description: "Dapatkan solusi digital terbaik untuk bisnis Anda. Dari SEO hingga Web Development, kami siap membantu.",
    url: "https://www.namasitus.com",
    siteName: "Nama Website",
    images: [
      {
        url: "/assets/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Preview Nama Website",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@nama_twitter",
    title: "Nama Website | Layanan Digital Terbaik",
    description: "Optimasi SEO, Web Development, dan solusi digital lainnya.",
    images: ["/assets/images/og-image.png"],
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <head>
        
         <Script id="schema-markup" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Nama Website",
            url: "https://www.namasitus.com",
            logo: "https://www.namasitus.com/assets/images/logo.png",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+62 812-3456-7890",
              contactType: "customer service",
              areaServed: "ID",
              availableLanguage: "Indonesian",
            },
            sameAs: [
              "https://www.facebook.com/namasitus",
              "https://www.twitter.com/namasitus",
              "https://www.instagram.com/namasitus",
            ],
          })}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} text-black antialiased bg-[#bddca9]`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
