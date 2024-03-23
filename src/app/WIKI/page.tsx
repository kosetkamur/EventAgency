import "./style.scss";

async function getData() {
    const res = await fetch(
        `http://raigoreg.beget.tech/api/wiki.get`,
        {
            method: 'GET',
            cache: 'force-cache',
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
                        <h1>ЭНЦИКЛО<wbr className="wiki-page__title_text__wbr" />&shy;ПЕДИЯ</h1>
                    </div>
                    <div className="wiki-page__title_description">
                        <p>
                            Наша Event-энциклопедия
                            постоянно обновляется и пополняется
                        </p>
                    </div>
                </div>
                <div className="wiki-page__alphabet">
                    {
                        letters.data.map(letter => (
                            <div className="wiki-page__alphabet_item">
                                <p className="wiki-page__alphabet_item__bigLetter">
                                    {letter.value}
                                </p>
                                <div className="wiki-page__alphabet_item__links">
                                    {
                                        letter.records.map(link => (
                                            <a href={link.external_link} className="wiki-page__alphabet_item__links_item">
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
    );
}