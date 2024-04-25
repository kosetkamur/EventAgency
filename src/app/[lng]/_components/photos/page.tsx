import "./style.scss";
import * as React from "react";
import Image from "next/image";
import {backendHost} from "@/lib/consts/consts";

async function getData() {
    const res = await fetch(
        `${backendHost}/api/core.gallery`,
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

export default async function PhotosComponent({id}) {
    const photos = await getData();

     return (
         <div className="photos-component" id={id}>
             <div className="photos-component__container">
                 {
                     photos.data.map((photo, index) => (
                         <div key={photo.id} className={`photos-component__container_item${index+1} photos-component__container_item`}>
                             <Image src={`${backendHost}${photo.photo}`} width="100" height="100" alt="фото" className="photos-component__container_item" />
                         </div>
                     ))
                 }
             </div>
         </div>
    );
}