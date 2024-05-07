import "./header.scss";
import * as React from 'react';
import Link from "next/link";
import logo from "@/public/images/logo.svg";
import Image from "next/image";
import Nav from "@/app/[lng]/_header/_nav/nav.jsx";
import ButtonHeader from "@/app/[lng]/_header/button";

export default function HeaderComponent({lng, files}) {
    return (
        <header className="header" id="header">
            <div className="header-desk">
                <div className="header__logo">
                    <Link href={`/${lng}`}>
                        <Image src={logo} alt="логотип Авантаж"  className="header__logo_img" />
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
                    <ButtonHeader lng={lng} files={files} />
                </div>
            </div>
        </header>
    );
}