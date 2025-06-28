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

// ✅ SEO Optimized Metadata
export const metadata: Metadata = {
  title: "Spic N Span | Premium Car Detailing in Canada",
  description:
    "Spic N Span offers top-rated car detailing services across Canada. Book your interior, exterior, or engine detailing today and restore your vehicle's shine.",
  keywords: [
    "car detailing Canada",
    "auto detailing Toronto",
    "mobile car wash",
    "car cleaning services",
    "interior car detailing",
    "Spic N Span Canada",
    "engine cleaning service",
  ],
  authors: [{ name: "Spic N Span" }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Spic N Span | Premium Car Detailing in Canada",
    description:
      "Canada's trusted car detailing company. Spic N Span delivers expert interior, exterior, and engine cleaning services across Canadian cities.",
    url: "https://www.spicnspan.ca",
    siteName: "Spic N Span",
    images: [
      {
        url: "/opengraph.jpg", // ✅ Ensure this image exists in /public
        width: 1200,
        height: 630,
        alt: "Spic N Span Car Detailing in Canada",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@spicnspan_ca",
    title: "Spic N Span | Premium Car Detailing in Canada",
    description:
      "Book expert car detailing in Canada. We offer interior, exterior, and engine cleaning with a shine that lasts.",
    images: ["/opengraph.jpg"],
  },
  metadataBase: new URL("https://www.spicnspan.ca"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-country="CA">
      <head>
        {/* ✅ Canonical + Geo Tags for Canada SEO */}
        <link rel="canonical" href="https://www.spicnspan.ca" />
        <meta name="geo.region" content="CA" />
        <meta name="geo.placename" content="Canada" />
        <meta name="geo.position" content="43.65107;-79.347015" />
        <meta name="ICBM" content="43.65107, -79.347015" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
