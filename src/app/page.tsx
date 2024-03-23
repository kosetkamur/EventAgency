import * as React from "react";

import "./style.scss";

import Image from 'next/image'
import icon1 from '../media/images/icon1.svg'
import button from '../media/images/button.png'
import bg from '../media/images/background2Main.png'
import ServicesComponent from "@/app/_components/services/page";

export default function Home() {
    return (
        <main className="main-page">
            <section className="main-page__video">
                {/*<video width="100%" controls autoPlay loop preload="auto" playsInline>*/}
                {/*    <source src="../media/video/showreal.mp4" type="video/mp4" />*/}
                {/*    Your browser does not support the video tag.*/}
                {/*</video>*/}
            </section>
            <section className="main-page__container">
                <div className="main-page__tagline">
                    <div className="main-page__tagline_container">
                        <p className="main-page__tagline_container__text main-page__tagline_container__align1">
                            ВЫ ДОВЕРЯЕТЕ
                        </p><br />
                        <p className="main-page__tagline_container__text main-page__tagline_container__align2">
                            НАМ СОБЫТИЯ, <Image src={icon1} alt="солнышко" className="main-page__tagline_container__text_image" />  МЫ
                        </p><br />
                        <p className="main-page__tagline_container__text main-page__tagline_container__align3">
                            ОПРАВДЫВАЕМ ДОВЕРИЕ
                        </p>
                    </div>
                </div>
                <ServicesComponent />
            </section>
            <section className="main-page__sticky-scroll">
                <div className="main-page__sticky-scroll_background">
                    <Image src={bg} alt="bg" />
                </div>
                <div className="main-page__sticky-scroll_about">
                    <div className="main-page__sticky-scroll_about__button">
                        <Image src={button} alt="Кнопка" />
                    </div>
                    <div className="main-page__sticky-scroll_about__text">
                        <p>
                            Добро пожаловать в мир неповторимых событий с Avantage Project!
                            Наши мероприятия не ограничиваются просто реализацией, они обеспечивают
                            беспрецедентный комфорт и невероятные впечатления.
                        </p>
                        <button>
                            ХОЧУ ЗНАТЬ БОЛЬШЕ
                        </button>
                    </div>
                </div>
            </section>
            <section className="main-page__cases">

            </section>
        </main>
    );
}