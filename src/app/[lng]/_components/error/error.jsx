"use client";
import "./style.scss";
import * as React from "react";
import {useTranslation} from "@/app/i18n/client";

export default function ErrorServer({lng, res}) {
    const { t } = useTranslation(lng,'translation');

     return (
         <div className="error-page">
             <div className="error-page__container">
                 <p className="error-page__container_number">
                     { res.status ? res.status : null}
                 </p>
                 <p className="error-page__container_text">
                     { res.message ? res.message : null}
                 </p>
                 <p className="error-page__container_description">
                     {t('bugMess')}
                 </p>
                 <a
                    className="gotg-page__container_button"
                    href={`/${lng}`}
                 >
                     {t('bugHref')}
                 </a>
             </div>
         </div>
    )
}