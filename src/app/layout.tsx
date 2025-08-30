import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NutriCare - Personalized Diet Plans That Work for You",
  description:
    "Transform your health with customized nutrition plans designed for your lifestyle. Professional dietician services with sustainable weight management and long-term results.",
  keywords:
    "dietician, nutritionist, diet plans, weight loss, healthy eating, nutrition counseling, Mumbai",
  authors: [{ name: "NutriCare" }],

  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      {
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },

  manifest: "/site.webmanifest",

  openGraph: {
    title: "NutriCare - Personalized Diet Plans That Work for You",
    description:
      "Professional nutrition guidance for sustainable health transformation",
    type: "website",
    locale: "en_US",
  },
};

// ✅ move viewport out of metadata
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
        <ToastContainer position="top-right" autoClose={3000} />
      </body>
    </html>
  );
}
