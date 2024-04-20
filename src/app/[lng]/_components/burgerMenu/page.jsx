import "./style.scss";
import * as React from "react";
import Image from "next/image";
import vk from "@/media/images/footerIcon1.svg";
import ok from "@/media/images/footerIcon2.svg";
import tg from "@/media/images/footerIcon3.svg";
import {backendHost} from "@/lib/consts/consts";
import {useTranslation} from "@/app/i18n";

async function getFiles(lng) {
    const res = await fetch(
        `${backendHost}/api/core.files?lang=${lng}`,
        {
            method: 'GET',
        }
    )

    if (!res.ok) {
        console.log(res.status)
    }

    return res.json()
}

export default async function BurgerComponent({lng}) {
    const emails = await getFiles(lng);
    const { t } = await useTranslation(lng,'translation');

     return (
         <div className="burger-component">
             <div className="burger-component__container">
                <div className="burger-component__container_menu">
                    <div className="burger-component__container_menu__href">
                         <a href={`/${lng}`} className="burger-component__container_menu__href_a">
                             {t('home')}
                         </a>
                         <a href={`/${lng}/blog`} className="burger-component__container_menu__href_a">
                             {t('navBlog')}
                         </a>
                         <a href={`/${lng}/cases`} className="burger-component__container_menu__href_a">
                             {t('cases')}
                         </a>
                         <a href={`/${lng}/about-us`} className="burger-component__container_menu__href_a">
                             {t('navAboutUs')}
                         </a>
                         <a href={`/${lng}/awards`} className="burger-component__container_menu__href_a">
                             {t('navAwards')}
                         </a>
                         <a href={`/${lng}/contacts`} className="burger-component__container_menu__href_a">
                             {t('navContacts')}
                         </a>
                    </div>
                    <div className="burger-component__container_menu__buttons">
                        <div className="burger-component__container_menu__buttons_socialMedia">
                            <a href={`mailto:${emails.data.vk}`} target="_blank">
                                <Image src={vk} alt="Вконтакте" className="burger-component__container_menu__buttons_socialMedia__a" />
                            </a>
                            <a href={`mailto:${emails.data.ok}`} target="_blank">
                                <Image src={ok} alt="Одноклассники" className="burger-component__container_menu__buttons_socialMedia__a" />
                            </a>
                            <a href={`mailto:${emails.data.telegram}`} target="_blank">
                                <Image src={tg} alt="Телеграмм" className="burger-component__container_menu__buttons_socialMedia__a" />
                            </a>
                        </div>
                        <div className="burger-component__container_menu__buttons_btn">
                            <a
                                href={`${backendHost}${emails.data.brief}`}
                                className="burger-component__container_menu__buttons_btn__brief"
                            >
                                ЗАПОЛНИТЬ БРИФ
                            </a>
                            <a
                                href={`${backendHost}${emails.data.presentation}`}
                                className="burger-component__container_menu__buttons_btn__presentation"
                            >
                                СКАЧАТЬ ПРЕЗЕНТАЦИЮ
                            </a>
                        </div>
                    </div>
                </div>
             </div>
         </div>
    )
}