import "./style.scss";
import * as React from "react";

import TeamComponent from "@/app/[lng]/_components/team/page";
import GoTgComponent from "@/app/[lng]/_components/tg/page";
import PhotosComponent from "@/app/[lng]/_components/photos/page";
import MarqeeComponent from "@/app/[lng]/_components/marqee/page";
import Form from "@/app/[lng]/_components/form/page";
import GroupComponents from "@/app/[lng]/_components/team/group/page";

import Image from "next/image";
import titleTeam from "@/media/images/aboutTeam.svg";
import aboutTeam from "@/media/images/aboutTeam.png";
import Link from "next/link";

export default function CasePage({ params: { lng } }) {
    return (
        <div className="about-us-page">
            <div className="containerAll">
                <div className="about-us-page__tagline">
                    <div className="about-us-page__tagline_container">
                        <p className="about-us-page__tagline_container__text about-us-page__tagline_container__align1">
                            ПРИВЕТ!
                        </p>
                        <p className="about-us-page__tagline_container__text about-us-page__tagline_container__align2">
                            МЫ EVENT-АГЕНТСТВО
                        </p>
                        <p className="about-us-page__tagline_container__text about-us-page__tagline_container__align3">
                            AVANTAGE ПРОДЖЕКТ
                        </p>
                        <p className="about-us-page__tagline_container__description">
                            Основатели проекта – два сильных специалиста с многолетней экспертизой в сфере event-услуг, которые создали команду, ставшую топом рынка.
                        </p>
                    </div>
                </div>
            </div>
            <div className="parallax-components">
                <div className="containerAll">
                    <div className="parallax-components__blur">
                        <div className="parallax-components__blur_container">
                            <div className="parallax-components__blur_container__button">
                                <Image src={aboutTeam} alt="Кнопка"  className="parallax-components__blur_container__button_img" />
                            </div>
                            <div className="parallax-components__blur_container__text">
                                <p className="parallax-components__blur_container__text_p">
                                    Вы можете еще не знать нас, но наши проекты точно знаете. Под руководством Лилии Фёдоровой и Марии Рудаковой за 10 лет на рынке мы реализовали масштабные и запоминающиеся мероприятия со смыслами для бизнеса разных форматов. С нами работают такие клиенты как Avito,  QIWI, Альфа-Банк, VK, Автомобиль Года, Лукойл, Сбербанк, Промсвязьбанк, Re:store, START.ru, VEKA, Wargaming.net, Garena, АДВ Консалтинг, Metadynea, ANALPA и др.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="parallax-components__numbers">
                        <div className="parallax-components__numbers_num">
                            <div className="parallax-components__numbers_num">
                                <p className="parallax-components__numbers_num__title">
                                    &gt;
                                </p>
                                <div className="parallax-components__numbers_num__container">
                                    <p className="parallax-components__numbers_num__title">
                                        5000
                                    </p>
                                    <p className="parallax-components__numbers_num__text">
                                        реализованных проектов
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="parallax-components__numbers_description">
                            <p className="parallax-components__numbers_description__text">
                                Под руководством Лилии Фёдоровой и Марии Рудаковой за 10 лет на рынке мы реализовали масштабные и запоминающиеся мероприятия со смыслами для бизнеса разных форматов.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="parallax-components__line"></div>
                <div className="containerAll">
                    <div className="parallax-components__numbers">
                        <div className="parallax-components__numbers_num">
                            <p className="parallax-components__numbers_num__title">
                                &gt;
                            </p>
                            <div className="parallax-components__numbers_num__container">
                                <p className="parallax-components__numbers_num__title">
                                    28000
                                </p>
                                <p className="parallax-components__numbers_num__text">
                                    уникальных сценариев
                                </p>
                            </div>
                        </div>
                        <div className="parallax-components__numbers_description">
                            <p className="parallax-components__numbers_description__text">
                                Мы готовы делиться опытом и экспертизой, объясняя каждый шаг. Мы креативим  совместно с вами в рамках бизнес задач. Мы топим за коллаборации и готовы стать вашим партнером на долгие годы.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="parallax-components__line"></div>
                <div className="containerAll">
                    <div className="parallax-components__numbers">
                        <div className="parallax-components__numbers_num">
                            <p className="parallax-components__numbers_num__title">
                                <span className="parallax-components__numbers_num__title_none">&gt;</span>
                            </p>
                            <div className="parallax-components__numbers_num__container">
                                <p className="parallax-components__numbers_num__title">
                                    15 <span className="parallax-components__numbers_num__title_year">лет</span>
                                </p>
                                <p className="parallax-components__numbers_num__text">
                                    в event-индустрии
                                </p>
                            </div>
                        </div>
                        <div className="parallax-components__numbers_description">
                            <p className="parallax-components__numbers_description__text">
                                В 2014 году мы приняли решение работать по системе Agile ещё до того, как многие корпорации её приняли. Мы стали работать частично удалённо в 2018, ещё до того, как это стало мейнстримом. Мы развивались в 2020 и научились делать гибридные мероприятия настолько классно, что стали получать за них призы.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="parallax-components__buttons">
                    <div className="parallax-components__buttons_item">
                        <Link href="" className="parallax-components__buttons_item__btn1">Портфолио</Link>
                    </div>
                    <div className="parallax-components__buttons_item">
                        <Link href={`/${lng}/blog`} className="parallax-components__buttons_item__btn2">медиа</Link>
                    </div>
                </div>
            </div>
            <div className="containerAll">
                <div className="team-component__team-title">
                    <Image src={titleTeam} alt="команда" width="100" height="100" className="team-component__team-title_img" />
                </div>
                <TeamComponent lng={lng} />
                <div className="team-component__team">
                    <GroupComponents lng={lng} />
                </div>
            </div>
            <div id="marqeeMobile">
                <MarqeeComponent color={"#8751FF"} />
            </div>
            <div className="containerAll">
                <GoTgComponent lng={lng} />
                <h2 className="about-us-page__title">
                    ЛЮДИ И СОБЫТИЯ
                    AVANTAGE PROJECT
                </h2>
                <PhotosComponent />
            </div>
            <div id="marqeeDesktop">
                <MarqeeComponent color={"#8751FF"} />
            </div>
            <div className="containerAll">
                <Form lng={lng} />
            </div>
        </div>
    );
}