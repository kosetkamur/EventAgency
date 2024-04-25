'use client';
import "./footer.scss";
import * as React from "react";
import arrow from "@/public/images/arrow.svg";
import vk from "@/public/images/footerIcon1.svg";
import ok from "@/public/images/footerIcon2.svg";
import tg from "@/public/images/footerIcon3.svg";
import Image from "next/image";
import {useTranslation} from "@/app/i18n/client";
import {backendHost} from "@/lib/consts/consts";

export default function Footer({emails, files, lng}) {
    const { t } = useTranslation(lng, 'translation');

    const scrollToTop = (e) => {
        e.preventDefault();
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    return (
        <footer className="footer">
            <div className="containerAll">
                <div className="footer__mail">
                    <p className="footer__mail_p">{t('CONTACTUS')}</p>
                    <a href={`mailto:${emails.data.contact_email}`} className="footer__mail_text">
                        avantage@avantage-event.com
                    </a>
                </div>
            </div>
            <div className="footer__line"></div>
            <div className="containerAll">
                <div className="footer__navigation">
                <div className="footer__navigation_column footer__navigation_first">
                    <a href={`/${lng}/WIKI`} className="footer__navigation_column__wiki">
                        WIKI
                    </a>
                </div>
                <div className="footer__navigation_column">
                    <div className="footer__navigation_column__mobile">
                        <div className="footer__navigation_column__mobile_items">
                            <a href={`/${lng}/services`} className="footer__navigation_column__a">
                                {t('services').toLowerCase()}
                            </a>
                            <a href={`/${lng}/cases`} className="footer__navigation_column__a">
                                {t('navCases').toLowerCase()}
                            </a>
                            <a href={`/${lng}/blog`} className="footer__navigation_column__a">
                                {t('navBlog').toLowerCase()}
                            </a>
                        </div>
                        <div className="footer__navigation_column__mobile_items">
                            <a href={`/${lng}/about-us`} className="footer__navigation_column__a">
                                {t('navAboutUs').toLowerCase()}
                            </a>
                            <a href={`/${lng}/awards`} className="footer__navigation_column__a">
                                {t('navAwards').toLowerCase()}
                            </a>
                            <a href={`/${lng}/contacts`} className="footer__navigation_column__a">
                                {t('navContacts').toLowerCase()}
                            </a>
                        </div>
                    </div>
                </div>
                <div className="footer__navigation_column">
                    <p className="footer__navigation_column__text">
                        {t('forClients')}
                    </p>
                    {
                        emails.data.email_for_clients.map(item =>
                            <a key={item} href={`mailto:${item}`} className="footer__navigation_column__a">
                                {item}
                            </a>
                        )
                    }
                    <p className="footer__navigation_column__text">
                        {t('forMedia')}
                    </p>
                    <a href={`mailto:${emails.data.email_for_mass_media}`} className="footer__navigation_column__a">
                        {emails.data.email_for_mass_media}
                    </a>
                    <p className="footer__navigation_column__text">
                        {t('forMedia')}
                    </p>
                    <a href={`mailto:${emails.data.email_for_partners}`} className="footer__navigation_column__a">
                        {emails.data.email_for_partners}
                    </a>
                    <p className="footer__navigation_column__text">
                        {t('workingWithUs')}
                    </p>
                    <a href={`mailto:${emails.data.email_for_applicant}`} className="footer__navigation_column__a">
                        {emails.data.email_for_applicant}
                    </a>
                </div>
                <div className="footer__navigation_column">
                    <a href={`${emails.data.telegram}`} className="footer__navigation_column__a">
                        telegram@avantage.project
                    </a>
                    <a href={`${backendHost}${files.data.presentation}`} className="footer__navigation_column__a">
                        {t('downloadPresentation')}
                    </a>
                    <a href={`${backendHost}${files.data.brief}`} className="footer__navigation_column__a">
                        {t('fillInTheBrief')}
                    </a>
                    <div className="footer__navigation_column__socialNetwork">
                        <a href={emails.data.vk} target="_blank">
                            <Image src={vk} alt="Вконтакте" className="footer__navigation_column__socialNetwork_a" />
                        </a>
                        <a href={emails.data.ok} target="_blank">
                            <Image src={ok} alt="Одноклассники" className="footer__navigation_column__socialNetwork_a" />
                        </a>
                        <a href={emails.data.telegram} target="_blank">
                            <Image src={tg} alt="Телеграмм" className="footer__navigation_column__socialNetwork_a" />
                        </a>
                    </div>
                </div>
                <div className="footer__navigation_column">
                    <button onClick={scrollToTop} className="footer__navigation_column__button">
                        {t('up')} <Image src={arrow} alt="ввверх" />
                    </button>
                </div>
                <div className="footer__navigation_column footer__navigation_first">
                    <p className="footer__navigation_column__down">
                        ©2024 AVANTAGEPROJECT
                    </p>
                </div>
                <div className="footer__navigation_column">
                    <a href={`${backendHost}${emails.data.agreement}`} className="footer__navigation_column__down">
                        {t('dataCollectionPolicy')}
                    </a>
                </div>
            </div>
            </div>
        </footer>
    );
}