// "use client";
import { Manrope } from "next/font/google";
import "./globals.css";
import "../../next-i18next.config.js"
import Header from "@/app/_header/header";
import * as React from "react";
import Footer from "@/app/_footer/footer";
import NProgress from "nprogress/nprogress";
import {usePathname} from "next/navigation";
import {useEffect} from "react";
import Emails from "@/app/_footer/emails";
import HeaderScroll from "@/app/_header";

const manrope = Manrope({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const pathname = usePathname();

  // useEffect(() => {
  //   NProgress.start();
  //   setTimeout(() => {
  //     NProgress.done();
  //   }, 10)
  // }, [pathname])

  return (
    <html>
      <body className={manrope.className}>
        <div className="container">
          <HeaderScroll />
          <Header />
            {children}
          <Emails />
        </div>
      </body>
    </html>
  );
}