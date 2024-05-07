import "./style.scss";
import * as React from "react";
import Image from "next/image";
import {backendHost} from "@/lib/consts/consts";

async function getData(lng) {
    const res = await fetch(
        `${backendHost}/api/cooperation.partners.list?lang=${lng}`,
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

export default async function PartnersComponent({lng}) {
    const partners = await getData(lng)

     return (
         <div className="partners-component">
             {
                 partners.data.map(partner =>
                     <div key={partner.logo} className="partners-component__item">
                     <Image src={`${backendHost}${partner.logo}`}
                            width="100"
                            height="100"
                            alt="партнер"
                            className="partners-component__item_image" />
                     </div>
                 )
             }
         </div>
    )
}