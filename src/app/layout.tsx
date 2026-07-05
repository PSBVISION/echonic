import type { Metadata } from "next";
import { Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {default:"Echonic",
    template: "%s | Echonic"
  },
  description: "Echonic is a text-to-speech web application that allows users to convert written text into natural-sounding speech. With a user-friendly interface and advanced speech synthesis technology, Echonic provides an accessible and efficient solution for individuals seeking to listen to written content. Whether for personal use, accessibility needs, or content creation, Echonic offers a seamless experience for transforming text into audio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html
      lang="en"
      className={`${inter.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning>
      <body className="min-h-full flex flex-col">
        {children}
        <Toaster />
      </body>
    </html>
      </ClerkProvider>
  );
}
