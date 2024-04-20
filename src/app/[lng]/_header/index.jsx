import Link from "next/link";
import Image from "next/image";
import logo from "@/media/images/logo.svg";
import burger from "@/media/images/burger.svg";
import * as React from "react";

export default function HeaderScroll() {
    return (
        <div className="header-desk-scroll">
            <div className="header-desk-scroll__logo">
                <Link href="/">
                    <Image src={logo} alt="логотип Авантаж" className="header-desk-scroll__logo_img" />
                </Link>
            </div>
            <div className="header-desk-scroll__burger">
                <Link href="/" className="header-desk-scroll__burger_text">
                    скачать презентацию
                </Link>
                <button className="header-desk-scroll__burger_item">
                    <Image src={burger} alt="меню" />
                </button>
            </div>
        </div>
    );
}