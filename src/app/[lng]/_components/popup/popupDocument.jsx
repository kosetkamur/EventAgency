"use client";
import ".//style.scss";
import * as React from "react";
import {useTranslation} from "@/app/i18n/client";

export default function PopupDocument({lng, closePopup}) {
    const { t } = useTranslation(lng,'translation');

    const handleClose = () => {
      closePopup();
    }

     return (
        <div className="popup">
                <div className="popup__bg popup__event">
                    <div className="popup__bg_container">
                        <div className="popup__bg_container__close">
                            <button className="popup__bg_container__close_btn" onClick={handleClose}></button>
                        </div>
                        <div className="popup__bg_container__text">
                            <p className="popup__bg_container__text_subtitle">
                                {t("sendarequestto")}
                            </p>
                            <p className="popup__bg_container__text_mail">
                                payment@avantage-event.com
                            </p>
                            <p className="popup__bg_container__text_subtitle">
                                {t("sendarequesttoText")}
                            </p>
                            <a
                                href="mailto:payment@avantage-event.com"
                                className="popup__bg_container__text_button"
                            >
                                {t("REACHOUT")}
                            </a>
                        </div>
                    </div>
                </div>
        </div>
    )
}