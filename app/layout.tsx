
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AosProvider from "@/src/Provider/Aos";
import Navbar from "@/src/Navbar/Navbar";
import Footer from "@/src/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "SingleKey Photography | Wedding & Event Photography",
    template: "%s | SingleKey Photography",
  },
  description:
    "Discover SingleKey Photography for wedding photography, candid moments, special events, portraits, and timeless memories.",
  applicationName: "SingleKey Photography",
  openGraph: {
    title: "SingleKey Photography | Wedding & Event Photography",
    description:
      "Capturing beautiful weddings, special events, and unforgettable moments through photography.",
    siteName: "SingleKey Photography",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <AosProvider />
        <Navbar />
        {children}
        <div className="relative z-20 bg-black">
          <Footer />
        </div>
      </body>
    </html>
  );
}
