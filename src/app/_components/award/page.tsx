import "./style.scss";
import Image from "next/image";

async function getData() {
    const res = await fetch(
        `http://raigoreg.beget.tech/api/core.awards_list?lang=ru&show_on_main_page=true`,
        {
            method: 'GET',
        }
    )

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export default async function AwardComponent() {
    const award = await getData();

    return (
        <div className="award-component">
            <div className="containerAll">
                <div className="award-component__awards">
                    {
                        award.data.map(award => (
                            <div key={award.id} className="award-component__awards_item">
                                <div className="award-component__awards_item__text">
                                    <p className="award-component__awards_item__text_year">{award.year}</p>
                                    <h2 className="award-component__awards_item__text_title">{award.title}</h2>
                                    <p className="award-component__awards_item__text_place">{award.place}</p>
                                    <p className="award-component__awards_item__text_nomination">{award.nomination}</p>
                                    <p className="award-component__awards_item__text_event">{award.event}</p>
                                </div>
                                <div className="award-component__awards_item__images">
                                    <Image src={`http://raigoreg.beget.tech${award.attachment}`} alt={award} width="500" height="500"  className="award-component__awards_item__images_img"/>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="award-component__button">
                    <a href="/awards" className="award-component__button_btn">
                        к другим наградам
                    </a>
                </div>
            </div>
        </div>
    );
}