import "./style.scss";

async function getData() {
    const res = await fetch(
        `http://raigoreg.beget.tech/api/wiki.get`,
        {
            method: 'GET',
        }
    )

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export default async function WikiPage() {
    const letters = await getData();

    return (
        <div className="wiki-page">
            <div className="containerAll">
                <div className="wiki-page__title">
                    <div className="wiki-page__title_text">
                        <h1 className="wiki-page__title_text__green">EVENT</h1>
                        <h1  className="wiki-page__title_text__black">
                            ЭНЦИКЛО<wbr className="wiki-page__title_text__wbr" />&shy;ПЕДИЯ
                        </h1>
                    </div>
                    <div className="wiki-page__title_description">
                        <p>
                            Наша Event-энциклопедия
                            постоянно обновляется и пополняется
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
                    </div>
                </div>
            </div>
        </div>
    );
}