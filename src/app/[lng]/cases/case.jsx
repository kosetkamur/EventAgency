"use client";
import "./style.scss";
import CardCaseComponent from "@/app/[lng]/cases/card";
import {useTranslation} from "@/app/i18n/client";
import Link from "next/link";
import Image from "next/image";
import sevOsetiaImg from "@/public/images/sevOsetia.webp";

export default function Cases({cases, lng}) {
    const { t } = useTranslation(lng,'translation');

    return (
        <div className="case-page">
            <h1 className="case-page__title">{t('navCases')}</h1>
            <div className="case-page__filter">
                <a href={`/${lng}/cases`} className="case-page__filter_button">
                    {t('all')}
                </a>
                <a href={`/${lng}/cases/internal`} className="case-page__filter_button">
                    {t('internalCommunications')}
                </a>
                <a href={`/${lng}/cases/external`} className="case-page__filter_button">
                    {t('externalСommunications')}
                </a>
                <a href={`/${lng}/cases/mice`} className="case-page__filter_button">
                    MICE
                </a>
            </div>
            <div className="case-page__cases">
                {
                    cases.data.map(item => (
                        <CardCaseComponent key={item.id} lng={lng} item={item} />
                    ))
                }
                <div className="case-page__cases_item">
                    <Link href="https://event-live.ru/articles/keysy/keysy_1120.html" scroll={true}>
                        <Image src={sevOsetiaImg}
                               width="100"
                               height="100"
                               alt="кейс"
                               className="case-page__cases_item__images" />
                        <div className="case-page__cases_item__buttons">
                            <button className="case-page__cases_item__buttons_button">
                                2023
                            </button>
                        </div>
                        <p className="case-page__cases_item__title">
                            {lng === "ru" ? "Северная Осетия" :  "North Ossetia"}
                        </p>
                    </Link>
                </div>
            </div>
        </div>
    );
}