"use client";
import "./style.scss";
import * as React from "react";
import {useEffect, useRef} from "react";
import {useTranslation} from "@/app/i18n/client";

export default function PopupTg({lng, targetBlockId}) {
    const { t } = useTranslation(lng, 'translation');
    const popupRef = useRef()

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    popupRef.current.style.display = 'flex'
                }
            })
        })

        const targetBlock = document.getElementById(targetBlockId)
        observer.observe(targetBlock)

        return () => {
            observer.disconnect()
        }
    }, [])

     return (
         <div className="popup" id="popup" ref={popupRef} style={{ display: 'none' }}>
             <div className="popup__bg popup__tg">
                 <div className="popup__bg_container">
                     <div className="popup__bg_container__close">
                        <button className="popup__bg_container__close_btn" onClick={() => popupRef.current.style.display = 'none'}></button>
                     </div>
                     <div className="popup__bg_container__text">
                         <p className="popup__bg_container__text_title">
                             {t("USONTELEGRAM")}
                         </p>
                         <p className="popup__bg_container__text_subtitle">
                             {t("joinTelegram")}
                         </p>
                         <a
                            href="/"
                            className="popup__bg_container__text_button"
                         >
                             {t("join")}
                         </a>
                     </div>
                 </div>
             </div>
         </div>
    )
}