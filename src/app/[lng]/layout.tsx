// "use client";
import { Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/app/[lng]/_header/header.jsx";
import * as React from "react";
import NProgress from "nprogress/nprogress";
import {useEffect} from "react";
import Emails from "@/app/[lng]/_footer/emails";
import HeaderScroll from "@/app/[lng]/_header";
import BurgerComponent from "@/app/[lng]/_components/burgerMenu/page";

const manrope = Manrope({ subsets: ["latin"] });

import { dir } from 'i18next'
import { languages } from '../i18n/settings'

export async function generateStaticParams() {
    return [...languages].map((lng) => ({ lng }))
}

export default function RootLayout({
   children,
   params: {
     lng
   }
 }) {

  // useEffect(() => {
  //   NProgress.start();
  //   setTimeout(() => {
  //     NProgress.done();
  //   }, 10)
  // }, [pathname])

  return (
    <html lang={lng} dir={dir(lng)}>
      <body className={manrope.className}>
        <div className="container">
          {/*<BurgerComponent />*/}
          <HeaderScroll />
          <Header lng={lng} />
            {children}
          <Emails lng={lng} />
        </div>
      </body>
    </html>
  );
}