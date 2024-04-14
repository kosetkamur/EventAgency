import "./style.scss";
import * as React from "react";
import Image from "next/image";

async function getData() {
    const res = await fetch(
        `http://raigoreg.beget.tech/api/core.gallery`,
        {
            method: 'GET',
        }
    )

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export default async function PhotosComponent() {
    const photos = await getData();

     return (
         <div className="photos-component">
             <div className="photos-component__container">
                 {
                     photos.data.map((photo, index) => (
                         <div key={photo.id} className={`photos-component__container_item${index+1} photos-component__container_item`}>
                             <Image src={`http://raigoreg.beget.tech${photo.photo}`} width="100" height="100" alt="фото" className="photos-component__container_item" />
                         </div>
                     ))
                 }
             </div>
         </div>
    );
}