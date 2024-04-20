import "./style.scss";
import * as React from "react";
import Image from "next/image";
import vk from "@/media/images/footerIcon1.svg";
import ok from "@/media/images/footerIcon2.svg";
import tg from "@/media/images/footerIcon3.svg";
import close from "@/media/images/close.svg";
import {backendHost} from "@/lib/consts/consts";
import {useTranslation} from "@/app/i18n/client";
import Link from "next/link";



export default function BurgerComponent({lng, files, closeBurger}) {
    const { t } = useTranslation(lng,'translation');

    const handleClose = () => {
        closeBurger(false);
    }

     return (
         <div className="burger-component">
             <div className="burger-component__container">
                <div className="burger-component__container_menu">
                    <div className="burger-component__container_menu__close">
                        <button onClick={handleClose} className="burger-component__container_menu__close_btn">
                            <Image src={close} alt="кнопка закрыть" />
                        </button>
                    </div>
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
                            <a href={`mailto:${files.data.vk}`} target="_blank">
                                <Image src={vk} alt="Вконтакте" className="burger-component__container_menu__buttons_socialMedia__a" />
                            </a>
                            <a href={`mailto:${files.data.ok}`} target="_blank">
                                <Image src={ok} alt="Одноклассники" className="burger-component__container_menu__buttons_socialMedia__a" />
                            </a>
                            <a href={`mailto:${files.data.telegram}`} target="_blank">
                                <Image src={tg} alt="Телеграмм" className="burger-component__container_menu__buttons_socialMedia__a" />
                            </a>
                        </div>
                        <div className="burger-component__container_menu__buttons_btn">
                            <a
                                href={`${backendHost}${files.data.brief}`}
                                className="burger-component__container_menu__buttons_btn__brief"
                            >
                                {t('fillBrief')}
                            </a>
                            <a
                                href={`${backendHost}${files.data.presentation}`}
                                className="burger-component__container_menu__buttons_btn__presentation"
                            >
                                {t('downloadPresentation')}
                            </a>
                        </div>
                        <div className="burger-component__container_menu__language">
                            <Link href={`/ru`} locale="ru" className={ lng === "ru" ? "burger-component__container_menu__language_btn active" : "component__container_menu__language_btn"}>
                                RU
                            </Link>
                            <Link href={`/en`} locale="en" className={ lng === "en" ? "burger-component__container_menu__language_btn active" : "component__container_menu__language_btn"}>
                                EN
                            </Link>
                        </div>
                    </div>
                </div>
             </div>
         </div>
    )
}