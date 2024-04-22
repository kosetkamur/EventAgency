import Image from "next/image";

import "./style.scss";
import {backendHost} from "@/lib/consts/consts";
import {useTranslation} from "@/app/i18n";

export const metadata = {
    title: "Мы в медиа",
    description: "Организация мероприятий для бизнеса b2b под ключ в одном из лучших event-агентств Москвы в online, offline и гибридном форматах. Организовываем фестивали, форумы, конференции, выставки, тренинги, ивенты для бизнеса. Moscow event агентство, которое оказывает услуги организатора мероприятий. ",
    keywords: "как подобрать подрядчика, event-руководители, команда организаторов мероприятий, event-специалисты, лучшие event-агентства для бизнеса, услуги организатора мероприятий, организовать мероприятие, мероприятие для бизнеса, ивент, event, b2b, мероприятие в москве, площадки для мероприятий, ТОП event-агентства, как подобрать event-агентство, ивент-медиа, организованные мероприятия, организовано проведение мероприятий, какие мероприятия организует, организовывать мероприятия работа"
};

async function getData(lng) {
    const res = await fetch(
        `${backendHost}/api/blog.article_list?lang=${lng}`,
        {
            method: 'GET',
        }
    )

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export default async function BlogPage({ params: { lng } }) {
    const articles = await getData(lng);
    const { t } = await useTranslation(lng,'translation');

    return (
        <section className="blog-page">
            <h1 className="blog-page__title">
                {t('weInMedia')}
            </h1>
            <div className="blog-page__media">
                {
                    articles.data.map(article =>
                        <div key={article.id} className="blog-page__media_item">
                            <a href={article.external_link}>
                                <Image src={`${backendHost}${article.photo}`} alt={article.title} width={500} height={500} className="blog-page__media_item__images" />
                                <p className="blog-page__media_item__text">
                                    {article.title}
                                </p>
                            </a>
                        </div>
                    )
                }
            </div>
        </section>
    );
}