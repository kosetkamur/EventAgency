import "./style.scss";
import {backendHost} from "@/lib/consts/consts";
import {useTranslation} from "@/app/i18n";

export const metadata = {
    title: "WIKI",
    description: "услуги организатора мероприятий, организовать мероприятие, мероприятие для бизнеса, ивент, event, b2b, мероприятие в москве, услуги организатора мероприятий, организовать мероприятие, мероприятие для бизнеса, ивент, лучшие агентства по организации мероприятий, организовать событие под ключ, организовать мероприятие под ключ. Организовать фестиваль. Организовать форум. Организовать конференцию. Организовать выставку. Организовать тренинг. Ивенты для бизнеса.",
    keywords: "услуги организатора мероприятий, организовать мероприятие, мероприятие для бизнеса, ивент, event, b2b, мероприятие в москве, площадки для мероприятий, корпоратив, фестиваль, форум, конференция, выставка, конгресс, пленарное заседание, тренинги, обучение персонала, семинары, онбординг, мотивация, выездные мероприятия, тимбилдинг, гендерные мероприятия, family day, клиентские мероприятия, презентация продукта/лонч, активности и мероприятия, направленные на позиционирование бренда, фестивали, выставки, интеграции бренда в события, деловые завтраки, деловой туризм, лучшие event-агентства Москвы, топ-агентств по организации мероприятий, кейсы организации мероприятий, топ-лучших мероприятий 2023, Событие Года, лучшие агентства по организации мероприятий,  event агентство, event агентство москва, event агентства спб, event агентство мероприятий, event праздничные агентства, организация event агентство, event агентство новосибирск, услуги event агентства, event агентство отзывы, ивент агентство, event, event агентство вакансии, лучшее event агентство, бизнес event агентство, event агентство организация мероприятий, фотограф event агентств, event агентства россии, топ event агентств, event услуги, moscow event агентство, крупное event агентство, рейтинг event агентств, работа в event агентстве, услуги event агентства, event услуги, услуги питания +для event агентств, кейтеринг, организация мероприятий кейсы"
};

async function getData(lng) {
    const res = await fetch(
        `${backendHost}/api/wiki.get?lang=${lng}`,
        {
            method: 'GET',
            next: { revalidate: 3600 },
        }
    )

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export default async function WikiPage({ params: { lng } }) {
    const letters = await getData(lng);
    const { t } = await useTranslation(lng,'translation');

    return (
        <div className="wiki-page">
            <div className="containerAll">
                <div className="wiki-page__title">
                    <div className="wiki-page__title_text">
                        <h1 className="wiki-page__title_text__green">EVENT</h1>
                        <h1  className="wiki-page__title_text__black isDesktop">
                            {t('ENCYCLOPAEDIA')}
                        </h1>
                        <h1  className="wiki-page__title_text__black isMobile">
                            {t('ENCYCLO')}
                        </h1>
                        <h1  className="wiki-page__title_text__black isMobile">
                            {t('PAEDIA')}
                        </h1>
                    </div>
                    <div className="wiki-page__title_description">
                        <p>
                            {t('ENCYCLOPAEDIAText')}
                        </p>
                    </div>
                </div>
                <div className="wiki-page__alphabet">
                    <div className="wiki-page__alphabet_container">
                    {
                        letters.data.langs.en.map(letter => (
                            <div key={letter.value} className="wiki-page__alphabet_container__item">
                                <p className="wiki-page__alphabet_container__item_bigLetter">
                                    {letter.value}
                                </p>
                                <div className="wiki-page__alphabet_container__item_links">
                                    {
                                        letter.records.map(link => (
                                            <a key={link.title} href={link.external_link} className="wiki-page__alphabet_container__item_links__item">
                                                {link.title}
                                            </a>
                                        ))
                                    }
                                </div>
                            </div>
                        ))
                    }
                    </div>
                    {
                        letters.data.langs.ru.length ?
                            <div className="wiki-page__alphabet_container">
                                {
                                    letters.data.langs.ru.map(letter => (
                                        <div key={letter.value} className="wiki-page__alphabet_container__item">
                                            <p className="wiki-page__alphabet_container__item_bigLetter">
                                                {letter.value}
                                            </p>
                                            <div className="wiki-page__alphabet_container__item_links">
                                                {
                                                    letter.records.map(link => (
                                                        <a key={link.title} href={link.external_link} className="wiki-page__alphabet_container__item_links__item">
                                                            {link.title}
                                                        </a>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    ))
                                }
                            </div> : null
                    }

                </div>
            </div>
        </div>
    );
}