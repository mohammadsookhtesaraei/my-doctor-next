import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";


import Header from "@/components/header/Header";

import "./globals.css";

const vazirMatn = Vazirmatn({
  subsets: ["latin", "arabic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "دکتر من",
  description: "پلتفرم جامع جستجوی دکتر و رززو نوبت انلاین",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className={vazirMatn.className}>
      
      <body>
        <Header/>
        <main>{children}</main>
        </body>
    </html>
  );
}
