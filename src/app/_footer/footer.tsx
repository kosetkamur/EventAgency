'use client';
import "./footer.scss";
import * as React from "react";
import arrow from "../../media/images/arrow.svg";
import Image from "next/image";

export default function Footer() {

    const scrollToTop = (e) => {
        e.preventDefault();
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    return (
        <footer className="footer">
            <div className="footer__mail">
                <p className="footer__mail_p">СВЯЗАТЬСЯ С НАМИ</p>
                <h2 className="footer__mail_text">
                    avantage@avantage-event.com
                </h2>
            </div>
            <div className="footer__line"></div>
            <div className="footer__navigation">
                <div className="footer__navigation_column footer__navigation_first">
                    <a href="/WIKI" className="footer__navigation_column__wiki">
                        WIKI
                    </a>
                </div>
                <div className="footer__navigation_column">
                    <a href="/services" className="footer__navigation_column__a">
                        услуги
                    </a>
                    <a href="/cases" className="footer__navigation_column__a">
                        кейсы
                    </a>
                    <a href="/blog" className="footer__navigation_column__a">
                        блог
                    </a>
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
                <div className="footer__navigation_column">
                    <p className="footer__navigation_column__text">
                        для клиентов
                    </p>
                    <a href="mailto:avantage@mail.ru" className="footer__navigation_column__a">
                        avantage@mail.translation
                    </a>
                    <p className="footer__navigation_column__text">
                        для СМИ и парнеров
                    </p>
                    <a href="mailto:avantage@mail.ru" className="footer__navigation_column__a">
                        avantage@mail.ru
                    </a>
                    <p className="footer__navigation_column__text">
                        для работы у нас
                    </p>
                    <a href="@/app/[locale]/layout#" className="footer__navigation_column__a">
                        avantage@mail.translation
                    </a>
                </div>
                <div className="footer__navigation_column">
                    <a href="mailto:avantage@mail.ru" className="footer__navigation_column__a">
                        telegram@avantage
                    </a>
                    <a href="@/app/[locale]/layout#" className="footer__navigation_column__a">
                        скачать презентацию
                    </a>
                    <a href="@/app/[locale]/layout#" className="footer__navigation_column__a">
                        скачать бриф
                    </a>
                </div>
                <div className="footer__navigation_column">
                    <button onClick={scrollToTop} className="footer__navigation_column__button">
                        вверх <Image src={arrow} alt="ввверх" />
                    </button>
                </div>
                <div className="footer__navigation_column footer__navigation_first">
                    <p href="/services" className="footer__navigation_column__down">
                        © 2023 AVANTAGE
                    </p>
                </div>
                <div className="footer__navigation_column">
                    <a href="/services" className="footer__navigation_column__down">
                        политика сбора данных
                    </a>
                </div>
            </div>
        </footer>
    );
}