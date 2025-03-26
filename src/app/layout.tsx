import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abdullah Ahmad | Machine Learning & AI Portfolio",
  description: "Machine Learning and AI enthusiast specializing in autonomous systems, deep learning, and computer vision. Explore my projects in AI, ML, and innovative technology solutions.",
  keywords: "Machine Learning, AI, Deep Learning, Computer Vision, Autonomous Systems, Portfolio, Abdullah Ahmad, ML Engineer, AI Developer",
  authors: [{ name: "Abdullah Ahmad" }],
  creator: "Abdullah Ahmad",
  publisher: "Abdullah Ahmad",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://abdullahahmad.vercel.app'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://abdullahahmad.vercel.app',
    siteName: 'Abdullah Ahmad Portfolio',
    title: 'Abdullah Ahmad | Machine Learning & AI Portfolio',
    description: 'Machine Learning and AI enthusiast specializing in autonomous systems, deep learning, and computer vision.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Abdullah Ahmad Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abdullah Ahmad | Machine Learning & AI Portfolio',
    description: 'Machine Learning and AI enthusiast specializing in autonomous systems, deep learning, and computer vision.',
    images: ['/og-image.jpg'],
  },
  icons: {
    icon: [
      {
        url: '/favicon.svg',
        type: 'image/svg+xml',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
} 