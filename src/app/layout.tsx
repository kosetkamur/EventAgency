import { Manrope } from "next/font/google";
import "./globals.css";
import "../../next-i18next.config.js"
import {Metadata} from "next";
import Header from "@/app/_header/header";
import * as React from "react";
import Footer from "@/app/_footer/footer";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Главная",
  description: "Ивент агентство",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className={manrope.className}>
        <div className="container">
          <Header />
            {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}