"use client";
import "./style.scss";
import * as React from "react";
import {useTranslation} from "@/app/i18n/client";
import button from "@/public/images/button.png";
import PopupProject from "@/app/[lng]/_components/popupProject/popupProject";
import {useState} from "react";

export default function ButtonPopupVideo({lng}) {
    const { t } = useTranslation(lng, 'translation');
    const [show, setShow] = useState(false);

    const showPopup = () => {
        setShow(true);
        document.body.style.overflow = 'hidden';
    }

    const closePopup = () => {
        setShow(false);
        document.body.style.overflow = 'auto';
    }

    return (
        <>
            <button className="main-page__application_tagline__container_btn" onClick={showPopup}>
                {t("leavearequest")}
            </button>
            {show && <PopupProject lng={lng} closePopup={closePopup} />}
        </>
    )
}