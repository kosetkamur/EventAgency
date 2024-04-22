"use client";
import "./style.scss";
import * as React from "react";
import {useTranslation} from "@/app/i18n/client";
import PopupDocument from "@/app/[lng]/_components/popup/popupDocument";
import {useState} from "react";

export default function SentDocs({lng}) {
    const { t } = useTranslation(lng, 'translation');
    const [show, setShow] = useState(false);

    const closePopup = () => {
        setShow(false);
    }

    return (
        <>
            <button  className="services-component_item__ul_btn" onClick={()=>setShow(true)}>
                {t('constituentDocuments')}
            </button>
            { show && <PopupDocument lng={lng} closePopup={closePopup} />}
        </>
    )
}
