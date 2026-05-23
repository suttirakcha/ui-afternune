import type { Metadata } from "next";
import { Noto_Sans_Thai, Raleway, Send_Flowers } from "next/font/google";
import { Provider } from "@/components/ui/provider";
import { Toaster } from "@/components/ui/toaster";
import { NextIntlClientProvider } from "next-intl";
import "./globals.css";
import { cookies } from "next/headers";

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

const notoSansThai = Noto_Sans_Thai({
  variable: "--font-noto-sans-thai",
  subsets: ["thai"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    template: "%s - Afternune",
    default: "Afternune",
  },
  description: "Let's have a chat together",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const locale = cookieStore.get("locale")?.value ?? "en";
  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${sendFlowers.variable} ${raleway.variable} ${notoSansThai.variable}`}
      >
        <NextIntlClientProvider>
          <Provider>
            {children}
            <Toaster />
          </Provider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
