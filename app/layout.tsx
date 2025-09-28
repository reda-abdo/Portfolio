import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Reda Abdelbary - Frontend Developer",
  description:
    "Frontend developer passionate about creating modern, responsive, and user-friendly web applications. Always exploring new technologies and focused on building smooth digital experiences.",
  keywords: [
    "frontend developer",
    "react",
    "nextjs",
    "typescript",
    "portfolio",
  ],
  authors: [{ name: "Reda Abdelbary" }],
  creator: "Reda Abdelbary",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.linkedin.com/in/reda-abdel-bary-95437b33b/",
    title: "Reda Abdelbary - Frontend Developer",
    description:
      "Frontend developer passionate about creating modern, responsive, and user-friendly web applications. Always exploring new technologies and focused on building smooth digital experiences.",
    siteName: "Reda Abdelbary Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reda Abdelbary - Frontend Developer",
    description:
      "Frontend developer passionate about creating modern, responsive, and user-friendly web applications. Always exploring new technologies and focused on building smooth digital experiences.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
