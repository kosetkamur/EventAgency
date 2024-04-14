import "./style.scss";
import * as React from "react";
import Image from 'next/image';

export default function CardComponent({name, position, photo}) {
     return (
         <div className="card-component">
             <div className="card-component__container">
                 <div className="card-component__container_images">
                     <Image src={`http://raigoreg.beget.tech${photo}`} alt="фотография" width="200" height="200"  className="card-component__container_images_img" />
                 </div>
                 <div className="card-component__container_text">
                     <p className="card-component__container_text__post" suppressHydrationWarning>
                         {position}
                     </p>
                     <p className="card-component__container_text__name" suppressHydrationWarning>
                         {name}
                     </p>
                 </div>
             </div>
         </div>
    )
}