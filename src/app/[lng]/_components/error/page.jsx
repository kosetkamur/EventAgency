import "./style.scss";
import * as React from "react";
import {useTranslation} from "@/app/i18n";

export default async function Error({params: { lng }}) {
    const { t } = await useTranslation(lng,'translation');
     return (
         <div className="error-page">
             <div className="error-page__container">
                 <p className="error-page__container_number">
                     404
                 </p>
                 <p className="error-page__container_text">
                     {t('bug')}
                 </p>
                 <p className="error-page__container_description">
                     {t('bugMessage')}
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