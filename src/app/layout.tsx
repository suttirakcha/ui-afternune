import type { Metadata } from "next";
import { Raleway, Send_Flowers } from "next/font/google";
import "./globals.css";

const sendFlowers = Send_Flowers({
  variable: "--font-send-flowers",
  subsets: ["latin"],
  weight: ["400"],
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    template: "%s - Afternune",
    default: "Afternune",
  },
  description: "Let's have a chat together",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
      <body className={`${sendFlowers.variable} ${raleway.variable}`}>
        {children}
      </body>
    </html>
  );
}
