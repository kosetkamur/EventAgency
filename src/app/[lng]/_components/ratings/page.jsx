import "./style.scss";
import Image from "next/image";
import * as React from "react";
import {backendHost} from "@/lib/consts/consts";
import {useTranslation} from "@/app/i18n";

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
    const { t } = await useTranslation(lng,'translation');

     return (
         <div className="rating-component">
             <div className="rating-component__title">
                 <div className="rating-component__title_photoTitle">
                     <p className="rating-component__title_photoTitle__text">
                         [ {t('weAreInRatings')} ]
                     </p>
                 </div>
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