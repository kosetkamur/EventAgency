import "./style.scss";
import Image from "next/image";
import img from "@/media/images/ratingsTop.png";
import * as React from "react";

async function getData() {
    const res = await fetch(
        `http://raigoreg.beget.tech/api/cooperation.ratings.list?lang=ru`,
        {
            method: 'GET',
        }
    )

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export default async function RatingsComponent() {
    const ratings = await getData();

     return (
         <div className="rating-component">
             <div className="rating-component__title">
                 <Image src={img} alt="Мы в рейтингах"  className="rating-component__title_image" />
             </div>
             <div className="rating-component__logos">
                 {
                     ratings.data.map(rating => (
                         <div key={rating.logo} className="rating-component__logos_item">
                            <Image src={`http://raigoreg.beget.tech${rating.logo}`} alt="рейтинг" width="300" height="300" className="rating-component__logos_item__image" />
                         </div>
                     ))
                 }
             </div>
         </div>
    )
}