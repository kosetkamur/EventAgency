import "./style.scss";
import * as React from "react";
import Image from "next/image";
import close from "@/media/images/close.svg";

export default async function PopupTg({lng}) {

     return (
         <div className="popup">
             <div className="popup__bg popup__tg">
                 <div className="popup__bg_container">
                     <button className="popup__bg_container__close">
                         <Image src={close} alt="кнопка закрыть" />
                     </button>
                     <div className="popup__bg_container__text">
                         <p className="popup__bg_container__text_title">
                             МЫ В TELEGRAM
                         </p>
                         <p className="popup__bg_container__text_subtitle">
                             Присоединяйся к нашему чату в Telegram
                         </p>
                         <a
                            href="/"
                            className="popup__bg_container__text_button"
                         >
                             подписаться
                         </a>
                     </div>
                 </div>
             </div>
         </div>
    )
}