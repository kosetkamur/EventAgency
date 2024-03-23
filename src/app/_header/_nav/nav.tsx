"use client";
import "../header.scss";
import * as React from 'react';
import Link from "next/link";
import {useRouter} from "next/navigation";
import {useState} from "react";

export default function Nav() {
    const [isActive, setIsActive] = useState<string>("/");
    // const { router } = useRouter();
    // console.log(router?.pathname ? router.pathname : null)

    const navLinks = [
        { title: 'Услуги', path: '/services' },
        { title: 'Кейсы', path: '/cases' },
        { title: 'Награды', path: '/awards' },
        { title: 'Блог', path: '/blog' },
        { title: 'О нас', path: '/about-us' },
        { title: 'Контакты', path: '/contacts' },
    ]

    return (
        <nav className="header__nav">
            {/*{navLinks.map((link) => (*/}
            {/*    <Link*/}
            {/*        key={link.title}*/}
            {/*        href={link.path}*/}
            {/*        passHref*/}
            {/*        onClick={(link) => router.push({link.path}, { scroll: false })}*/}
            {/*        className={router?.pathname === link.path ? "header__nav_item active" : "header__nav_item"}>*/}
            {/*        {link.title}*/}
            {/*    </Link>*/}
            {/*))}*/}
            {navLinks.map((link) => (
                <Link onClick={()=>setIsActive(link.path)} key={link.title} href={link.path} passHref className={isActive === link.path ? "header__nav_item active" : "header__nav_item"}>
                    {link.title}
                </Link>
            ))}
        </nav>
    );
}