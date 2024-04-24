import "./style.scss";
import * as React from "react";
import Image from 'next/image'
import Link from "next/link";
import {backendHost} from "@/lib/consts/consts";

async function getData(lng) {
    const res = await fetch(
        `${backendHost}/api/goods.list?lang=${lng}`,
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

export default async function CardsComponent({lng}) {
    const cards = await getData(lng);

    return (
        <div className="cards-components">
            {
                cards.data.map(card => (
                    <Link key={card.id} href={card.external_link} className={`cards-components_item cards-components_item${card.order}`}>
                        <div className="cards-components_item__container">
                            <div className="cards-components_item__container_num">
                                {"0"+card.order}
                            </div>
                            <div className="cards-components_item__container_title">
                                {card.title}
                            </div>
                            <div className="cards-components_item__container_subtitle">
                                {card.description}
                            </div>
                        </div>
                        <div className="cards-components_item__container">
                            <div className="cards-components_item__container_image">
                                { card.background_image &&
                                    <Image
                                        src={`${backendHost}${card.background_image}`}
                                        width="100"
                                        height="100"
                                        className="cards-components_item__container_image__img"
                                        alt="иконка" />}
                            </div>
                        </div>
                        <div className="cards-components_item__container">
                            <div className="cards-components_item__container_runStroke">
                                <div className="cards-components_item__container_runStroke__text">
                                    {card.events} {card.events}
                                </div>
                            </div>
                        </div>
                    </Link>
                ))
            }
        </div>
    )
}