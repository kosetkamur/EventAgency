'use client';
import "./footer.scss";
import * as React from "react";
import arrow from "../../media/images/arrow.svg";
import vk from "../../media/images/footerIcon1.svg";
import ok from "../../media/images/footerIcon2.svg";
import tg from "../../media/images/footerIcon3.svg";
import Image from "next/image";

export default function Footer({emails, files}) {

    const scrollToTop = (e) => {
        e.preventDefault();
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    return (
        <footer className="footer">
            <div className="containerAll">
                <div className="footer__mail">
                    <p className="footer__mail_p">СВЯЗАТЬСЯ С НАМИ</p>
                    <a href={`mailto:${emails.data.contact_email}`} className="footer__mail_text">
                        avantage@avantage-event.com
                    </a>
                </div>
            </div>
            <div className="footer__line"></div>
            <div className="containerAll">
                <div className="footer__navigation">
                <div className="footer__navigation_column footer__navigation_first">
                    <a href="/WIKI" className="footer__navigation_column__wiki">
                        WIKI
                    </a>
                </div>
                <div className="footer__navigation_column">
                    <div className="footer__navigation_column__mobile">
                        <div className="footer__navigation_column__mobile_items">
                            <a href="/services" className="footer__navigation_column__a">
                                услуги
                            </a>
                            <a href="/cases" className="footer__navigation_column__a">
                                кейсы
                            </a>
                            <a href="/blog" className="footer__navigation_column__a">
                                блог
                            </a>
                        </div>
                        <div className="footer__navigation_column__mobile_items">
                            <a href="/about-us" className="footer__navigation_column__a">
                                о нас
                            </a>
                            <a href="/awards" className="footer__navigation_column__a">
                                награды
                            </a>
                            <a href="/contacts" className="footer__navigation_column__a">
                                контакты
                            </a>
                        </div>
                    </div>
                </div>
                <div className="footer__navigation_column">
                    <p className="footer__navigation_column__text">
                        для клиентов
                    </p>
                    {
                        emails.data.email_for_clients.map(item =>
                            <a href={`mailto:${item}`} className="footer__navigation_column__a">
                                {item}
                            </a>
                        )
                    }
                    <p className="footer__navigation_column__text">
                        для СМИ
                    </p>
                    <a href={`mailto:${emails.data.email_for_mass_media}`} className="footer__navigation_column__a">
                        {emails.data.email_for_mass_media}
                    </a>
                    <p className="footer__navigation_column__text">
                        для партнеров
                    </p>
                    <a href={`mailto:${emails.data.email_for_partners}`} className="footer__navigation_column__a">
                        {emails.data.email_for_partners}
                    </a>
                    <p className="footer__navigation_column__text">
                        для работы у нас
                    </p>
                    <a href={`mailto:${emails.data.email_for_applicant}`} className="footer__navigation_column__a">
                        {emails.data.email_for_applicant}
                    </a>
                </div>
                <div className="footer__navigation_column">
                    <a href={`mailto:${emails.data.telegram}`} className="footer__navigation_column__a">
                        {emails.data.telegram}
                    </a>
                    <a href={`mailto:${files.data.presentation}`} className="footer__navigation_column__a">
                        скачать презентацию
                    </a>
                    <a href={`mailto:${files.data.brief}`} className="footer__navigation_column__a">
                        скачать бриф
                    </a>
                    <div className="footer__navigation_column__socialNetwork">
                        <a href={`mailto:${emails.data.vk}`} target="_blank">
                            <Image src={vk} alt="Вконтакте" className="footer__navigation_column__socialNetwork_a" />
                        </a>
                        <a href={`mailto:${emails.data.ok}`} target="_blank">
                            <Image src={ok} alt="Одноклассники" className="footer__navigation_column__socialNetwork_a" />
                        </a>
                        <a href={`mailto:${emails.data.telegram}`} target="_blank">
                            <Image src={tg} alt="Телеграмм" className="footer__navigation_column__socialNetwork_a" />
                        </a>
                    </div>
                </div>
                <div className="footer__navigation_column">
                    <button onClick={scrollToTop} className="footer__navigation_column__button">
                        вверх <Image src={arrow} alt="ввверх" />
                    </button>
                </div>
                <div className="footer__navigation_column footer__navigation_first">
                    <p className="footer__navigation_column__down">
                        ©2023 AVANTAGEPROJECT
                    </p>
                </div>
                <div className="footer__navigation_column">
                    <a href={`mailto:${emails.data.agreement}`} className="footer__navigation_column__down">
                        политика сбора данных
                    </a>
                </div>
            </div>
            </div>
        </footer>
    );
}