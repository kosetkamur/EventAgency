"use client";
import "../header.scss";
import * as React from 'react';
import Link from "next/link";
import {useState} from "react";
import {useTranslation} from "@/app/i18n/client";
import {usePathname, useRouter} from "next/navigation";

export default function Nav({lng}) {
    const [isActive, setIsActive] = useState("/");
    //@ts-ignore
    const { t } = useTranslation(lng, 'common');
    const path = usePathname();
    return (
        <nav className="header__nav">
            <Link href={`/${lng}/services`} locale={lng} passHref className={ path === `/${lng}/services` ? `header__nav_item active` : `header__nav_item`}>
                {t("navServices")}
            </Link>
            <Link href={`/${lng}/cases`} locale={lng} passHref className={ path === `/${lng}/cases` ? `header__nav_item active` : `header__nav_item`}>
                {t('navCases')}
            </Link>
            <Link href={`/${lng}/awards`} locale={lng} passHref className={ path === `/${lng}/awards` ? `header__nav_item active` : `header__nav_item`}>
                {t('navAwards')}
            </Link>
            <Link href={`/${lng}/blog`} locale={lng} passHref className={ path === `/${lng}/blog` ? `header__nav_item active` : `header__nav_item`}>
                {t('navBlog')}
            </Link>
            <Link href={`/${lng}/about-us`} locale={lng} passHref className={ path === `/${lng}/about-us` ? `header__nav_item active` : `header__nav_item`}>
                {t('navAboutUs')}
            </Link>
            <Link href={`/${lng}/contacts`} locale={lng} passHref className={ path === `/${lng}/contacts` ? `header__nav_item active` : `header__nav_item`}>
                {t('navContacts')}
            </Link>
        </nav>
    );
}