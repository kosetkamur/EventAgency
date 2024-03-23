"use client";
import "./header.scss";
import * as React from 'react';
import Link from "next/link";
import logo from "../../media/images/logo.svg";
import burger from "../../media/images/burger.svg";
import Image from "next/image";
import Nav from "@/app/_header/_nav/nav";

export default function Header() {

    return (
        <header className="header" id="header">
            <div className="header-desk">
            <div className="header__logo">
                <Link href="/">
                    <Image src={logo} alt="логотип Авантаж" />
                </Link>
            </div>
            <Nav />
            <div className="header__multilanguage">
                <button className="header__multilanguage_button">
                    RU
                </button>
                <button className="header__multilanguage_button">
                    EN
                </button>
            </div>
            </div>
            <div className="header-mob">
                <div className="header-mob__logo">
                    <Link href="/">
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