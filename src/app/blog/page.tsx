import Image from "next/image";

import "./style.scss";

async function getData() {
    const res = await fetch(
        `http://raigoreg.beget.tech/api/blog.article_list?lang=ru`,
        {
            method: 'GET',
        }
    )

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export default async function BlogPage() {
    const articles = await getData();
    return (
        <section className="blog-page">
            <h1 className="blog-page__title">МЫ В МЕДИА</h1>
            <div className="blog-page__media">
                {
                    articles.data.map(article =>
                        <div key={article.id} className="blog-page__media_item">
                            <a href={article.external_link}>
                                <Image src={`http://raigoreg.beget.tech${article.photo}`} alt={article.title} width={500} height={500} className="blog-page__media_item__images" />
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