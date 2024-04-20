import ".//style.scss";
import * as React from "react";
import Image from "next/image";
import close from "@/media/images/close.svg";

export default async function PopupEvent({lng}) {

     return (
         <div className="popup">
             <div className="popup__bg popup__event">
                 <div className="popup__bg_container">
                     <button className="popup__bg_container__close">
                         <Image src={close} alt="кнопка закрыть" />
                     </button>
                     <div className="popup__bg_container__text">
                         <p className="popup__bg_container__text_title">
                             ПЛАНИРУЕТЕ МЕРОПРИЯТИЕ?
                         </p>
                         <p className="popup__bg_container__text_subtitle">
                             Мы разберём бриф по вашему событию и оценим проект
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