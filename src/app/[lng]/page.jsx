import * as React from "react";
import { useTranslation } from '@/app/i18n';
import {fallbackLng, languages} from "@/app/i18n/settings";
import {backendHost} from "@/lib/consts/consts";
import Image from 'next/image';

import "./style.scss";
import "./_components/parallax/style.scss";
import "./_components/video/style.scss";

import CaseMainComponent from "@/app/[lng]/_components/cases/page";
import AwardComponent from "@/app/[lng]/_components/award/page";
import PartnersComponent from "@/app/[lng]/_components/partners/page";
import PopupTg from "@/app/[lng]/_components/popup/popupTg";
import PopupEvent from "@/app/[lng]/_components/popup/popupEvent";

import icon1 from '@/public/images/icon1.svg';
import mainArrow from "@/public/images/mainArrow2.svg";
import bg from "@/public/images/mainParallax.svg";
import bgMobile from "@/public/images/mainParallaxMobile.svg";
import ButtonPopupProject from "@/app/[lng]/_components/popupProject/buttonPopupProject";
import ButtonPopupVideo from "@/app/[lng]/_components/popupVideo/buttonPopupVideo";
import {Parallax} from "@/app/[lng]/_components/parallax/parallax";
import ServicesComponent from "@/app/[lng]/_components/services/page";

export const metadata = {
    title: "Организация мероприятий в Москве | Мероприятия для бизнеса b2b",
    description: "Организация мероприятий в Москве в online, offline и гибридном форматах. Организация мероприятий для бизнеса b2b под ключ в одном из лучших event-агентств Москвы. Организовываем фестивали, форумы, конференции, выставки, тренинги, ивенты для бизнеса.",
    keywords: "лучшие event-агентства Москвы, топ-агентств по организации мероприятий, организация мероприятий, организовать мероприятие, мероприятие для бизнеса, ивент, event, b2b, мероприятие в москве, площадки для мероприятий, корпоратив, фестиваль, форум, конференция, выставка, конгресс, пленарное заседание, тренинги, обучение персонала, семинары, онбординг, мотивация, выездные мероприятия, тимбилдинг, гендерные мероприятия, family day, клиентские мероприятия, презентация продукта/лонч, активности и мероприятия, направленные на позиционирование бренда, фестивали, выставки, интеграции бренда в события, деловые завтраки, деловой туризм, event агентство, event агентство москва, event агентства спб, event агентство мероприятий, event праздничные агентства, организация event агентство, event агентство новосибирск, услуги event агентства, event агентство отзывы, ивент агентство, event, event агентство вакансии, лучшее event агентство, бизнес event агентство, event агентство организация мероприятий, фотограф event агентств, event агентства россии, топ event агентств, event услуги, moscow event агентство, крупное event агентство, рейтинг event агентств, работа в event агентстве"
};

async function getData(lng) {
    const res = await fetch(
        `${backendHost}/api/core.about?lang=${lng}`,
        {
            method: 'GET',
            cache: "force-cache"
        }
    )

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

async function getContacts(lng) {
    const res = await fetch(
        `${backendHost}/api/core.contacts?lang=${lng}`,
        {
            method: 'GET',
            cache: "force-cache"
        }
    )

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export default async function Home({ params: { lng } }) {
    if ([...languages].indexOf(lng) < 0) lng = fallbackLng
    const { t } = await useTranslation(lng,'translation');
    const data = await getData(lng);
    const contacts = await getContacts(lng);

    return (
        <main className="main-page">
            <section className="main-page__video">
                <video width="1920" height="800" loop muted preload="metadata" playsInline autoPlay className="main-page__video_intro">
                    <source src={`${backendHost}${data.data.intro_video}`} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </section>
            <section className="main-page__container">
                <div className="main-page__tagline">
                    <div className="main-page__tagline_container main-page__tagline_container1">
                        <p className="main-page__tagline_container__text main-page__tagline_container__align1">
                            {t('YOUTRUST')}
                        </p><br />
                        <p className="main-page__tagline_container__text main-page__tagline_container__align2">
                            {t('USWITHEVENTS')} <Image loading="lazy" src={icon1} alt="солнышко" className="main-page__tagline_container__text_image" />  {t('WE')}
                        </p><br />
                        <p className="main-page__tagline_container__text main-page__tagline_container__align3">
                            {t('HONOURYOURTRUST')}
                        </p>
                    </div>
                    <div className="main-page__tagline_container main-page__tagline_container2">
                        <p className="main-page__tagline_container__text main-page__tagline_container__align1">
                            {t('YOUMAYNOT')}
                        </p><br />
                        <p className="main-page__tagline_container__text main-page__tagline_container__align2">
                            {t('KNOWUS')} <Image loading="lazy" src={icon1} alt="солнышко" className="main-page__tagline_container__text_image" />  {t('BUTYOUDEFINITELY')}
                        </p><br />
                        <p className="main-page__tagline_container__text main-page__tagline_container__align1">
                            {t('KNOWOURPROJECTS')}
                        </p>
                    </div>
                    <div className="main-page__tagline_container main-page__tagline_container3">
                        <p className="main-page__tagline_container__text main-page__tagline_container__align2">
                            {t('EVERYMIND')}
                        </p><br />
                        <p className="main-page__tagline_container__text main-page__tagline_container__align1">
                            <Image loading="lazy" src={icon1} alt="солнышко" className="main-page__tagline_container__text_image" /> {t('COUNTS')}
                        </p>
                    </div>
                </div>
                <ServicesComponent lng={lng} id="ServicesComponent" />
            </section>
            <PopupEvent lng={lng} post={contacts.data.contact_email} targetBlockId="ServicesComponent"/>
            <div className="main-page__parallax">
                <Parallax speed={-4} className="self-start">
                    <div className="main-page__parallax_image">
                        <Image loading="lazy" src={bg} alt="полоски" className="main-page__parallax_image__img isDesktop" />
                        <Image loading="lazy" src={bgMobile} alt="полоски" className="main-page__parallax_image__img isMobile" />
                    </div>
                </Parallax>
                <Parallax speed={1} className="self-end overflow-hidden">
                <div className="containerAll main-page__parallax_container">
                    <div className="parallax-components__blur">
                        <div className="parallax-components__blur_container">
                            <div className="parallax-components__blur_container__button">
                                <ButtonPopupVideo video={data.data.welcome_video} />
                            </div>
                            <div className="parallax-components__blur_container__text">
                                <p className="parallax-components__blur_container__text_p">
                                    {t("welcomeWords")}
                                </p>
                                <a href={`/${lng}/about-us`} className="parallax-components__blur_container__text_btn">
                                    {t("learnMore")}
                                </a>
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
                            <div className="parallax-components__numbers_description__text" dangerouslySetInnerHTML={{ __html: t("completedProjectsText")}} />
                        </div>
                    </div>
                </div>
                <div className="parallax-components__line main-page__parallax_container"></div>
                <div className="containerAll main-page__parallax_container">
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
                            <div className="parallax-components__numbers_description__text" dangerouslySetInnerHTML={{ __html: t("uniqueEventScenariosText")}} />
                        </div>
                    </div>
                </div>
                <div className="parallax-components__line main-page__parallax_container"></div>
                <div className="containerAll main-page__parallax_container">
                    <div className="parallax-components__numbers">
                        <div className="parallax-components__numbers_num">
                            <p className="parallax-components__numbers_num__title">
                                <span className="parallax-components__numbers_num__title_none">	&gt;</span>
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
                            <div className="parallax-components__numbers_description__text" dangerouslySetInnerHTML={{ __html: t("yearsInTheIndustryText")}} />
                        </div>
                    </div>
                    <div className="parallax-components__buttons">
                        <div className="parallax-components__buttons_item">
                            <a href={`${backendHost}${data.data.presentation}`} download className="parallax-components__buttons_item__btn1">
                                {t("portfolio")}
                            </a>
                        </div>
                        <div className="parallax-components__buttons_item">
                            <a href={`/${lng}/blog`} className="parallax-components__buttons_item__btn2">
                                {t("media")}
                            </a>
                        </div>
                    </div>
                    <div className="parallax-components__title">
                        <div className="parallax-components__title_photoTitle">
                            <p className="parallax-components__title_photoTitle__text">
                                [ {t('navCases').toLowerCase()} ]
                            </p>
                        </div>
                    </div>
                </div>
                </Parallax>
            </div>
            <div className="containerAll">
                <CaseMainComponent id="CaseMainComponent" lng={lng} />
            </div>
            <PopupTg lng={lng} targetBlockId="CaseMainComponent"/>
            <AwardComponent lng={lng} />
            <div className="containerAll">
                <div className="video-component" id="rating">
                    <div className="video-component__container">
                        <div className="video-component__container_title">
                            <div className="video-component__container_title__text">
                                <p className="video-component__container_title__text">
                                    <span className="video-component__container_title__text_num">80% </span>
                                    {t("OFOURCLIENTSRETURN")}
                                </p>
                                <p className="video-component__container_title__text video-component__container_title__right">
                                    {t("AFTERTHEFIRSTEVENT")}
                                </p>
                            </div>
                            <div className="video-component__container_title__arrow">
                                <Image src={mainArrow} alt="стрелка" className="video-component__container_title__arrow_img" />
                            </div>
                        </div>
                        <video width="1859" height="775" controls muted playsInline autoPlay className="video-component__container_video">
                            <source src={`${backendHost}${data.data.interview}`} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </div>
            <PartnersComponent lng={lng} />
            <div className="containerAll">
                <section className="main-page__application" id="contactUs">
                    <div className="main-page__application_tagline">
                        <p className="main-page__application_tagline__text main-page__application_tagline__text1">
                            {t("PLANNING")}
                        </p><br />
                        <p className="main-page__application_tagline__text main-page__application_tagline__text2">
                            {t("ANEVENT")}
                        </p>
                        <div className="main-page__application_tagline__container">
                            <p className="main-page__application_tagline__container_text">
                                {t("PLANNINGANEVENTText")}
                            </p>
                            <ButtonPopupProject lng={lng} />
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}