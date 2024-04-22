import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import {useTranslation} from "@/app/i18n";

import "./style.scss";

import ServicesComponent from "@/app/[lng]/_components/services/page";
import CardsComponent from "@/app/[lng]/_components/cards/page";
import Form from "@/app/[lng]/_components/form/page";
import icon4 from "@/media/images/icon4.svg";

export const metadata = {
    title: "Услуги",
    description: "Организация мероприятий для бизнеса b2b под ключ в одном из лучших event-агентств Москвы в online, offline и гибридном форматах. Организовываем фестивали, форумы, конференции, выставки, тренинги, ивенты для бизнеса. Moscow event агентство, которое оказывает услуги организатора мероприятий.",
    keywords: "услуги организатора мероприятий, организовать мероприятие, мероприятие для бизнеса, ивент, event, b2b, мероприятие в москве, площадки для мероприятий, корпоратив, фестиваль, форум, конференция, выставка, конгресс, пленарное заседание, тренинги, обучение персонала, семинары, онбординг, мотивация, выездные мероприятия, тимбилдинг, гендерные мероприятия, family day, клиентские мероприятия, презентация продукта/лонч, активности и мероприятия, направленные на позиционирование бренда, фестивали, выставки, интеграции бренда в события, деловые завтраки, деловой туризм, event агентство, event агентство москва, event агентства спб, event агентство мероприятий, event праздничные агентства, организация event агентство, event агентство новосибирск, услуги event агентства, event агентство отзывы, ивент агентство, event, event агентство вакансии, лучшее event агентство, бизнес event агентство, event агентство организация мероприятий, фотограф event агентств, event агентства россии, топ event агентств, event услуги, moscow event агентство, крупное event агентство, рейтинг event агентств, работа в event агентстве, услуги event агентства, event услуги, услуги питания +для event агентств, кейтеринг"
};

export default async function ServicesPage({ params: { lng } }) {
    const { t } = await useTranslation(lng,'translation');

    return (
        <div className="services-page">
            <div className="containerAll">
                <div className="services-page__tagline">
                    <div className="services-page__tagline_container">
                        <p className="services-page__tagline_container__text services-page__tagline_container__align1">
                            {t('wePlanAnd')}
                        </p><br />
                        <p className="services-page__tagline_container__text services-page__tagline_container__align2">
                            <Image src={icon4} alt="солнышко" className="services-page__tagline_container__text_image" />  {t('execute')}
                        </p><br />
                        <p className="services-page__tagline_container__text services-page__tagline_container__align3">
                            {t('unforgettableLargeScale')}
                        </p><br />
                        <p className="services-page__tagline_container__text services-page__tagline_container__align4">
                            {t('events')}
                        </p>
                    </div>
                </div>
                <ServicesComponent lng={lng} />
                <div className="services-page__button">
                    <Link href={`/${lng}/about-us`} className="services-page__button_btn">
                        {t('whyUsBtn')}
                    </Link>
                </div>
                <CardsComponent lng={lng} />
                <Form lng={lng} />
            </div>
        </div>
    );
}