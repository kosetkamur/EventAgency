"use client";
import "./header.scss";
import * as React from 'react';
import Link from "next/link";
import logo from "../../../media/images/logo.svg";
import burger from "../../../media/images/burger.svg";
import Image from "next/image";
import Nav from "@/app/[lng]/_header/_nav/nav.jsx";

export default function Header({lng}) {
    return (
        <header className="header" id="header">
            <div className="header-desk">
            <div className="header__logo">
                <Link href={`/${lng}`}>
                    <Image src={logo} alt="логотип Авантаж" />
                </Link>
            </div>
            <Nav lng={lng} />
            <div className="header__multilanguage">
                <Link href={`/ru`} locale="ru" className={ lng === "ru" ? "header__multilanguage_button active" : "header__multilanguage_button"}>
                    RU
                </Link>
                <Link href={`/en`} locale="en" className={ lng === "en" ? "header__multilanguage_button active" : "header__multilanguage_button"}>
                    EN
                </Link>
            </div>
            </div>
            <div className="header-mob">
                <div className="header-mob__logo">
                    <Link href={`/${lng}`}>
                        <Image src={logo} alt="логотип Авантаж" className="header-mob__logo_img" />
                    </Link>
                </div>
                <div className="header-mob__burger">
                    <button className="header-mob__burger_item">
                        <Image src={burger} alt="меню" />
                    </button>
                </div>
            </div>
        </header>
    );
}