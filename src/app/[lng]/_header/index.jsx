import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/logo.svg";
import * as React from "react";
import {backendHost} from "@/lib/consts/consts";
import {useTranslation} from "@/app/i18n";
import ButtonHeader from "@/app/[lng]/_header/button";

async function getFiles(lng) {
    const res = await fetch(
        `${backendHost}/api/core.files?lang=${lng}`,
        {
            method: 'GET',
            cache: "force-cache"
        }
    )

    if (!res.ok) {
        console.log(res.status)
    }

    return res.json()
}

export default async function HeaderScroll({lng}) {
    const files = await getFiles(lng);
    const { t } = await useTranslation(lng,'translation');
    return (
        <div className="header-desk-scroll">
            <div className="header-desk-scroll__logo">
                <Link href={`/${lng}`}>
                    <Image src={logo} alt="логотип Авантаж" className="header-desk-scroll__logo_img" />
                </Link>
            </div>
            <div className="header-desk-scroll__burger">
                <Link href={`${backendHost}/media/${files.data.presentation}`} download className="header-desk-scroll__burger_text">
                    {t('downloadPresentation')}
                </Link>
                <ButtonHeader files={files} lng={lng} />
            </div>
        </div>
    );
}