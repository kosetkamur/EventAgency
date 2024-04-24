import "./style.scss";
import * as React from "react";
import {backendHost} from "@/lib/consts/consts";
import {useTranslation} from "@/app/i18n";

async function getFiles(lng) {
    const res = await fetch(
        `${backendHost}/api/core.files?lang=${lng}`,
        {
            method: 'GET',
            cache: 'force-cache'
        }
    )

    if (!res.ok) {
        console.log(res.status)
    }

    return res.json()
}


export default async function GoTgComponent({lng}) {
    const files = await getFiles(lng);
    const { t } = await useTranslation(lng,'translation');

    return (
         <div className="gotg-page">
             <div className="gotg-page__container">
                 <p className="gotg-page__container_text">
                     {t('goTg')}
                 </p>
                 <a
                    href={files.data.telegram}
                    className="gotg-page__container_button"
                 >
                     {t('subscribe')}
                 </a>
             </div>
         </div>
    )
}