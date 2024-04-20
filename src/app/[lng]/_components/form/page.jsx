import arrowForm from "@/media/images/arrowForm.svg";
import icon3 from "@/media/images/icon3.svg";
import Image from "next/image";

import "./style.scss";
import {useTranslation} from "@/app/i18n";

async function requestUsername(formData) {
    console.log('vjeoij', formData)
    const username = formData.get('username');
    const task = formData.get('task');
    const email = formData.get('email');
    const phone = formData.get('phone');
}


export default async function Form({lng}) {
    const { t } = await useTranslation(lng,'translation');

    return (
        <form className="form-component">
            <div className="form-component__title">
                <p className="form-component__title_p">
                    <Image src={icon3} alt="солнышко" className="form-component__title_sun" />{t('TOGET')} <span>{t('INTOUCH')}</span>,
                </p>
                <p className="form-component__title_p">
                    {t('SENDUSANEMAIL')} <Image src={arrowForm} alt="стрелка вниз" className="form-component__title_arrow" />
                </p>
            </div>
            <div className="form-component__form">
                <div className="form-component__form_header">
                    <p>
                        {t('TOAVANTAGEPROJECT')}
                    </p>
                    <p>
                        {t('SUBJECTEVENT')}
                    </p>
                </div>
                <div className="form-component__form_main">
                    <span>ПРИВЕТ, Я</span>
                    <input
                        type="text"
                        name="username"
                        className="form-component__form_main__input"
                        placeholder="ваше имя"
                    />
                    <span>.</span> <span>НАМ НУЖНО СДЕЛАТЬ</span>
                    <input
                        type="text"
                        name="task"
                        className="form-component__form_main__input"
                        placeholder="опишите задачу"
                    />
                    <span>,</span> <span>И ЧТОБЫ ВСЕ БЫЛО</span> <span>В ЛУЧШЕМ ВИДЕ.</span>
                    <span>СВЯЖИТЕСЬ СО МНОЙ:</span> <span>ВОТ МОЯ ПОЧТА</span>

                    <input
                        type="text"
                        name="email"
                        className="form-component__form_main__input"
                        placeholder="email"
                    />
                    <span> И ТЕЛЕФОН</span>
                    <span><input
                        type="text"
                        name="phone"
                        className="form-component__form_main__input"
                        placeholder="+7 999 999 99 99"
                    />.</span>
                </div>
                <div className="form-component__form_footer">
                    <div className="form-component__form_footer__checkbox">
                        <label className="form-component__form_footer__checkbox_label">
                            <input type="checkbox"/>
                            <div className="checkbox__checkmark"></div>
                            <p className="checkbox__body">
                                Я даю согласие на обработку своих персональных данных
                            </p>
                        </label>
                    </div>
                    <button type="submit" className="form-component__form_footer__button">
                        отправить
                    </button>
                </div>
            </div>
        </form>
    )
}