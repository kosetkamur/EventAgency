import ".//style.scss";
import * as React from "react";
import Image from "next/image";
import close from "@/media/images/close.svg";

export default async function popupDocument({lng}) {

     return (
         <div className="popup">
             <div className="popup__bg popup__event">
                 <div className="popup__bg_container">
                     <button className="popup__bg_container__close">
                         <Image src={close} alt="кнопка закрыть" />
                     </button>
                     <div className="popup__bg_container__text">
                         <p className="popup__bg_container__text_subtitle">
                             Пришлите запрос на
                         </p>
                         <p className="popup__bg_container__text_mail">
                             payment@avantage-event.com
                         </p>
                         <p className="popup__bg_container__text_subtitle">
                             и мы оперативно направим вам список необходимых учредительных документов
                         </p>
                         <a
                            href="/"
                            className="popup__bg_container__text_button"
                         >
                             НАПИСАТЬ
                         </a>
                     </div>
                 </div>
             </div>
         </div>
    )
}