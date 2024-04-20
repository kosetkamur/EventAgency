import "./style.scss";
import Image from "next/image";
import img from "@/media/images/ratingsTop.png";
import * as React from "react";
import {backendHost} from "@/lib/consts/consts";

async function getData(lng) {
    const res = await fetch(
        `${backendHost}/api/cooperation.ratings.list?lang=${lng}`,
        {
            method: 'GET',
        }
    )

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export default async function RatingsComponent({lng}) {
    const ratings = await getData(lng);

     return (
         <div className="rating-component">
             <div className="rating-component__title">
                 <Image src={img} alt="Мы в рейтингах"  className="rating-component__title_image" />
             </div>
             <div className="rating-component__logos">
                 {
                     ratings.data.map(rating => (
                         <div key={rating.logo} className="rating-component__logos_item">
                            <Image src={`${backendHost}${rating.logo}`} alt="рейтинг" width="300" height="300" className="rating-component__logos_item__image" />
                         </div>
                     ))
                 }
             </div>
         </div>
    )
}