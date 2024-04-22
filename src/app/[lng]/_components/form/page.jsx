"use client";
import InputMask from 'react-input-mask';
import arrowForm from "@/media/images/arrowForm.svg";
import icon3 from "@/media/images/icon3.svg";
import Image from "next/image";

import "./style.scss";
import {useTranslation} from "@/app/i18n/client";
import formAction from "@/app/[lng]/_components/form/formAction";
import {useState} from "react";

export default function Form({lng}) {
    const [value, setValue] = useState("");
    const { t } = useTranslation(lng);

    return (
        <form className="form-component" action={formAction}>
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
                    <span>{t('HIIAM')}</span>
                    <input
                        required
                        type="text"
                        name="full_name"
                        className="form-component__form_main__input"
                        placeholder={t('yourName')}
                    />
                    <span>.</span> <span>{t('WENEEDTODO')}</span>
                    <input
                        required
                        type="text"
                        name="project_goals"
                        className="form-component__form_main__input"
                        placeholder={t('describeTheTask')}
                    />
                    <span>,</span> <span>{t('ANDEVERYTHINGSHOULD')}</span> <span>{t('BEDONEPERFECTLY')}.</span>
                    <span>{t('CONTACTME')}:</span> <span>{t('HEREISMYEMAIL')}</span>

                    <input
                        required
                        type="text"
                        name="email"
                        className="form-component__form_main__input"
                        placeholder="email"
                    />
                    <span>{t('ANDPHONENUMBER')}</span>
                    <span>
                        <InputMask mask="+7 (___) ___-__-__" value={value} onChange={(e) => setValue(e.target.value)}>
                            {() => <input
                                type="tel"
                                placeholder="+7 (999) 999-99-99"
                                className="form-component__form_main__input"
                            />}
                        </InputMask>.</span>
                </div>
                <div className="form-component__form_footer">
                    <div className="form-component__form_footer__checkbox">
                        <label className="form-component__form_footer__checkbox_label">
                            <input type="checkbox" name="agreement" required />
                            <div className="checkbox__checkmark"></div>
                            <p className="checkbox__body">
                                {t('persData')}
                            </p>
                        </label>
                    </div>
                    <button type="submit" className="form-component__form_footer__button">
                        {t('send')}
                    </button>
                </div>
            </div>
        </form>
    )
}