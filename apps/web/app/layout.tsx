import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "@fontsource-variable/mona-sans";
import { GlobalProviders } from "~/providers/global";
import { cn } from "~/lib/utils";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "JAF - Just another form",
  description: "Build forms that feel like a conversation, not a spreadsheet.",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "JAF - Just another form",
    description: "Build forms that feel like a conversation, not a spreadsheet.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("dark", "font-sans")} suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <GlobalProviders>{children}</GlobalProviders>
      </body>
    </html>
  );
}
