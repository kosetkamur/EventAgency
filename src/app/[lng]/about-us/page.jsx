import "./style.scss";
import * as React from "react";
import Link from "next/link";
import {useTranslation} from "@/app/i18n";

import TeamComponent from "@/app/[lng]/_components/team/page";
import GoTgComponent from "@/app/[lng]/_components/tg/page";
import PhotosComponent from "@/app/[lng]/_components/photos/page";
import MarqeeComponent from "@/app/[lng]/_components/marqee/page";
import Form from "@/app/[lng]/_components/form/page";
import GroupComponents from "@/app/[lng]/_components/team/group";
import {Parallax} from "@/app/[lng]/_components/parallax/parallax";
import CardsComponent from "@/app/[lng]/_components/cards/page";
import ErrorServer from "@/app/[lng]/_components/error/error";

import Image from "next/image";
import {backendHost} from "@/lib/consts/consts";
import aboutTeam from "@/public/images/aboutTeam.png";
import bg from "@/public/images/mainParallax.svg";
import bgMobile from "@/public/images/mainParallaxMobile.svg";


export const metadata = {
    title: "О компании",
    description: "Avantage Project – event-агентство с опытом более 15 лет на рынке. Организация мероприятий для бизнеса b2b под ключ в одном из лучших event-агентств Москвы в online, offline и гибридном форматах. Организовываем фестивали, форумы, конференции, выставки, тренинги, ивенты для бизнеса. Moscow event агентство, которое оказывает услуги организатора мероприятий.",
    keywords: "услуги организатора мероприятий, организовать мероприятие, мероприятие для бизнеса, ивент, event, b2b, мероприятие в москве, площадки для мероприятий, корпоратив, фестиваль, форум, конференция, выставка, конгресс, пленарное заседание, тренинги, обучение персонала, семинары, онбординг, мотивация, выездные мероприятия, тимбилдинг, гендерные мероприятия, family day, клиентские мероприятия, презентация продукта/лонч, активности и мероприятия, направленные на позиционирование бренда, фестивали, выставки, интеграции бренда в события, деловые завтраки, деловой туризм, лучшие event-агентства Москвы, топ-агентств по организации мероприятий, кейсы организации мероприятий, топ-лучших мероприятий 2023, Событие Года, лучшие агентства по организации мероприятий, организовать событие под ключ, организовать мероприятие под ключ"
};

async function getData(lng) {
    const res = await fetch(
        `${backendHost}/api/core.about?lang=${lng}`,
        {
            method: 'GET',
            cache: 'force-cache'
        }
    )

    if (!res.ok) {
        <ErrorServer res={res} />
    }

    return res.json()
}

export default async function CasePage({ params: { lng } }) {
    const { t } = await useTranslation(lng,'translation');
    const data = await getData(lng);
    return (
        <div className="about-us-page">
            <div className="containerAll">
                <div className="about-us-page__tagline">
                    <div className="about-us-page__tagline_container">
                        <p className="about-us-page__tagline_container__text about-us-page__tagline_container__align1">
                            {t('hello')}
                        </p>
                        <p className="about-us-page__tagline_container__text about-us-page__tagline_container__align2">
                            {t('WEAREANEVENTAGENCY')}
                        </p>
                        <p className="about-us-page__tagline_container__text about-us-page__tagline_container__align3">
                            AVANTAGE PROJECT
                        </p>
                        <p className="about-us-page__tagline_container__description">
                            {t('WEAREANEVENTAGENCYText')}
                        </p>
                    </div>
                </div>
            </div>
            <div className="about-us-page__about-title">
                <div className="about-us-page__about-title_container">
                    <p className="about-us-page__about-title_container__text">
                        [ {t('navAboutUs').toLowerCase()} ]
                    </p>
                </div>
            </div>
            <div className="parallax-components">
                <Parallax speed={-4} className="self-start">
                    <div className="parallax-components__parallax_image">
                        <Image src={bg} alt="полоски" className="parallax-components__parallax_image__img isDesktop" />
                        <Image src={bgMobile} alt="полоски" className="parallax-components__parallax_image__img isMobile" />
                    </div>
                </Parallax>
                <Parallax speed={1} className="self-end overflow-hidden">
                    <div className="containerAll">
                        <div className="parallax-components__blur2">
                            <div className="parallax-components__blur2_container">
                                <div className="parallax-components__blur2_container__button">
                                    <Image src={aboutTeam} alt="команда"  className="parallax-components__blur2_container__button_img" />
                                </div>
                                <div className="parallax-components__blur2_container__text">
                                    <p className="parallax-components__blur2_container__text_p">
                                        {t('text')}
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
                                            {data.data.implemented_projects}
                                        </p>
                                        <p className="parallax-components__numbers_num__text">
                                            {t("completedProjects")}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="parallax-components__numbers_description">
                                <p className="parallax-components__numbers_description__text">
                                    {t("completedProjectsText")}
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
                                        {data.data.unique_scenarios}
                                    </p>
                                    <p className="parallax-components__numbers_num__text">
                                        {t("uniqueEventScenarios")}
                                    </p>
                                </div>
                            </div>
                            <div className="parallax-components__numbers_description">
                                <p className="parallax-components__numbers_description__text">
                                    {t("uniqueEventScenariosText")}
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
                                        {data.data.years_of_experience} <span className="parallax-components__numbers_num__title_year">{t("years")}</span>
                                    </p>
                                    <p className="parallax-components__numbers_num__text">
                                        {t("yearsInTheIndustry")}
                                    </p>
                                </div>
                            </div>
                            <div className="parallax-components__numbers_description">
                                <p className="parallax-components__numbers_description__text">
                                    {t("yearsInTheIndustryText")}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="parallax-components__buttons">
                        <div className="parallax-components__buttons_item">
                            <Link href={`/${lng}`} className="parallax-components__buttons_item__btn1">{t("portfolio")}</Link>
                        </div>
                        <div className="parallax-components__buttons_item">
                            <Link href={`/${lng}/blog`} className="parallax-components__buttons_item__btn2">{t("media")}</Link>
                        </div>
                    </div>
                </Parallax>
            </div>
            <div className="containerAll">
                <div className="about-us-page__team-title">
                    <div className="about-us-page__team-title_container">
                        <p className="about-us-page__team-title_container__text">
                            [ {t('team')} ]
                        </p>
                    </div>
                </div>
                <TeamComponent lng={lng} id="team" video={data.data.welcome_video} />
                <div className="team-component__team">
                    <GroupComponents lng={lng} />
                </div>
                <CardsComponent lng={lng} />
            </div>
            <div id="marqeeMobile">
                <MarqeeComponent color={"#8751FF"} />
            </div>
            <div className="containerAll">
                <GoTgComponent lng={lng} />
                <h2 className="about-us-page__title">
                    {t('PEOPLEANDEVENTSAVANTAGEPROJECT')}
                </h2>
                <PhotosComponent id="photo" />
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