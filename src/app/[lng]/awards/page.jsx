import "./style.scss";
import Image from "next/image";
import arrow from "@/media/images/arrowAwards.svg";
import halfCircle from "@/media/images/half-circle-awards.svg"
import RatingsComponent from "@/app/[lng]/_components/ratings/page";
import {backendHost} from "@/lib/consts/consts";
import {useTranslation} from "@/app/i18n";

export const metadata = {
    title: "Награды",
    description: "Avantage Project входит в ТОП-50 коммуникационных агентств России. Мы являемся лауреатами и победителями таких премий как “Событие года”, “BEMA”, “Золотой пазл”, а также членами НАОМ. Организовываем мероприятия для бизнеса b2b под ключ в одном из лучших event-агентств Москвы в online, offline и гибридном форматах. Организовываем фестивали, форумы, конференции, выставки, тренинги, ивенты для бизнеса. ",
    keywords: "услуги организатора мероприятий, организовать мероприятие, мероприятие для бизнеса, ивент, event, b2b, мероприятие в москве, площадки для мероприятий, корпоратив, фестиваль, форум, конференция, выставка, конгресс, пленарное заседание, тренинги, обучение персонала, семинары, онбординг, мотивация, выездные мероприятия, тимбилдинг, гендерные мероприятия, family day, клиентские мероприятия, презентация продукта/лонч, активности и мероприятия, направленные на позиционирование бренда, фестивали, выставки, интеграции бренда в события, деловые завтраки, деловой туризм, лучшие event-агентства Москвы, топ-агентств по организации мероприятий, кейсы организации мероприятий, топ-лучших мероприятий 2023, Событие Года, лучшие агентства по организации мероприятий,  event агентство, event агентство москва, event агентства спб, event агентство мероприятий, event праздничные агентства, организация event агентство, event агентство новосибирск, услуги event агентства, event агентство отзывы, ивент агентство, event, event агентство вакансии, лучшее event агентство, бизнес event агентство, event агентство организация мероприятий, фотограф event агентств, event агентства россии, топ event агентств, event услуги, moscow event агентство, крупное event агентство, рейтинг event агентств, работа в event агентстве, услуги event агентства, event услуги, услуги питания +для event агентств, кейтеринг, организация мероприятий кейсы\n"
};

async function getData(lng) {
    const res = await fetch(
        `${backendHost}/api/core.awards_list?lang=${lng}`,
        {
            method: 'GET',
        }
    )

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export default async function AwardsPage({ params: { lng } }) {
    const awards = await getData(lng);
    const { t } = await useTranslation(lng,'translation');

    return (
        <div className="awards-page">
            <div className="containerAll">
                <div className="awards-page__title">
                    <div className="awards-page__title_text">
                        <h1 className="awards-page__title_text__black">
                            {t('awards')}
                        </h1>
                        <h1 className="awards-page__title_text__green">
                            AVANTAGE<br  className="awards-page__title_text__green_br" /> PROJECT
                        </h1>
                    </div>
                    <div className="awards-page__title_description">
                        <p>
                            {t('top50')}
                        </p>
                    </div>
                </div>
                <div className="awards-page__arrow">
                    <Image src={arrow} alt="стрелка" />
                </div>
            </div>
            <Image src={halfCircle} alt="denf"  className="awards-page__semicircle" />
            <div className="awards-page__awards">
                <div className="awards-page__awards_container">
                    {
                        awards.data.map(award => (
                            <div key={award.id} className="awards-page__awards_container__item">
                                <div className="awards-page__awards_container__item_text">
                                    <p className="awards-page__awards_container__item_text__year">{award.year}</p>
                                    <h2 className="awards-page__awards_container__item_text__title">{award.title}</h2>
                                    <p className="awards-page__awards_container__item_text__place">{award.place}</p>
                                    <p className="awards-page__awards_container__item_text__nomination">{award.nomination}</p>
                                    <p className="awards-page__awards_container__item_text__event">{award.event}</p>
                                </div>
                                <div className="awards-page__awards_container__item_images">
                                    <Image src={`${backendHost}${award.attachment}`} alt={award} width="500" height="500"  className="awards-page__awards_container__item_images_img"/>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <Image src={halfCircle} alt="denf"  className="awards-page__semicircle1" />
            <div className="containerAll">
                <RatingsComponent lng={lng} />
            </div>
        </div>
    );
}