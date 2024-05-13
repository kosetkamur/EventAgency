import "./style.scss";
import Image from "next/image";
import {backendHost} from "@/lib/consts/consts";
import {useTranslation} from "@/app/i18n";

async function getData(lng) {
    const res = await fetch(
        `${backendHost}/api/core.awards_list?lang=${lng}&show_on_main_page=true`,
        {
            method: 'GET',
            cache: 'force-cache'
        }
    )

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export default async function AwardComponent({lng}) {
    const award = await getData(lng);
    const { t } = await useTranslation(lng);

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
                                    <Image src={`${backendHost}${award.attachment}`} loading="lazy" alt={award} width="500" height="500"  className="award-component__awards_item__images_img"/>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="award-component__button">
                    <a href={`/${lng}/awards`} className="award-component__button_btn">
                        {t('otherAwards')}
                    </a>
                </div>
            </div>
        </div>
    );
}