import "./style.scss";
import * as React from "react";
import Image from 'next/image'
import servicesTop from '@/media/images/servicesTop.png'
import Link from "next/link";

async function getData() {
    const res = await fetch(
        `http://raigoreg.beget.tech/api/goods.list?lang=ru`,
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

export default async function CardsComponent() {
    const cards = await getData();

    return (
        <div className="cards-components">
            {
                cards.data.map(card => (
                    <Link href={card.external_link} className={`cards-components_item cards-components_item${card.order}`}>
                        <div className="cards-components_item__num">
                            {"0"+card.order}
                        </div>
                        <div className="cards-components_item__title">
                            {card.title}
                        </div>
                        <div className="cards-components_item__subtitle">
                            {card.description}
                        </div>
                        {/*<Image src={} alt={} />*/}
                        <div className="cards-components_item__runStroke">
                            <div className="cards-components_item__runStroke_text">
                                {card.events} {card.events}
                            </div>
                        </div>
                    </Link>
                ))
            }
        </div>
    )
}