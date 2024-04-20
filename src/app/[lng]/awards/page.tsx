import "./style.scss";
import Image from "next/image";
import arrow from "@/media/images/arrowAwards.svg";
import halfCircle from "@/media/images/half-circle-awards.svg"
import RatingsComponent from "@/app/[lng]/_components/ratings/page";
import {backendHost} from "@/lib/consts/consts";

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
    return (
        <div className="awards-page">
            <div className="containerAll">
                <div className="awards-page__title">
                    <div className="awards-page__title_text">
                        <h1 className="awards-page__title_text__black">
                            НАГРАДЫ
                        </h1>
                        <h1 className="awards-page__title_text__green">
                            AVANTAGE<br  className="awards-page__title_text__green_br" /> PROJECT
                        </h1>
                    </div>
                    <div className="awards-page__title_description">
                        <p>
                            Входим в ТОП-50<br /> коммуникационных агенств России
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