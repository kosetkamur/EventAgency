import "./style.scss";
import * as React from "react";
import DirectorsComponents from "@/app/[lng]/_components/team/directors/page";
import Image from "next/image";
import play from "@/public/images/aboutPlay.svg";
import {useTranslation} from "@/app/i18n";
import ButtonPopupVideoAbout from "@/app/[lng]/_components/popupVideo/buttonPopupVideoAbout";

export default async function TeamComponent({lng, video}) {
    const { t } = await useTranslation(lng,'translation');
     return (
         <div className="team-component">
             <div className="team-component__container">
                 <DirectorsComponents lng={lng} />
                 <div className="team-component__container_item">
                     <p className="team-component__container_item__title" suppressHydrationWarning>
                         {t("partner")}<br/>{t("executives")}
                     </p>
                 </div>
                 <div className="team-component__container_item">
                     <div className="team-component__container_item__bottom">
                         <div className="team-component__container_item__bottom_button">
                             <ButtonPopupVideoAbout video={video} />
                         </div>
                         <div className="team-component__container_item__bottom_text">
                             <p className="team-component__container_item__bottom_button__p" suppressHydrationWarning>
                                 {t("videoGreeting")}
                             </p>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
    )
}