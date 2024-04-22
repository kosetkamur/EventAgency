import "./style.scss";
import * as React from "react";
import DirectorsComponents from "@/app/[lng]/_components/team/directors/page";
import Image from "next/image";
import play from "@/media/images/aboutPlay.svg";
import {useTranslation} from "@/app/i18n";

export default async function TeamComponent({lng}) {
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
                             <button className="team-component__container_item__bottom_button__btn">
                                 <Image
                                    src={play}
                                    alt="начать видео"
                                    width="100"
                                    className="team-component__container_item__bottom_button__btn_img"
                                    height="100" />
                             </button>
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