"use client";
import arrowForm from "@/public/images/arrowForm.svg";
import icon3 from "@/public/images/icon3.svg";
import Image from "next/image";

import "./style.scss";
import {useTranslation} from "@/app/i18n/client";
import {createRef, useState} from "react";
import {backendHost} from "@/lib/consts/consts";

export default function Form({lng, id}) {
    const { t } = useTranslation(lng);
    const [error, setError] = useState(null);
    const [errorMess, setErrorMess] = useState(null);

    async function handleSubmitClient(formData) {
        setError(null)

        const rawFormData = {
            full_name: formData.get('full_name'),
            project_goals: formData.get('project_goals'),
            // project_scope: formData.get('project_scope') || '',
            email: formData.get('email'),
            contact_phone: formData.get('contact_phone'),
            agreement: formData.get('agreement') === "on" ? "true" : "false"
        }

        const response = await fetch(`${backendHost}/api/bids.cooperation.create`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(rawFormData),
        })
        const data = await response.json()
        setErrorMess(data);

        if (response.ok) {
            setError(false);
        } else if (response.status === "400") {
            setError(true);
        }else {
            setError(true);
        }
    }

    const ref = createRef();

    const submitHandler = async (formData) => {
        const response = await handleSubmitClient(formData);
        if (response){
            ref.current.reset();
        } else {
            ref.current.reset();
        }
    }

    return (
        <div className="form-component" id={id}>
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
                <form ref={ref} action={submitHandler}>
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
                            <input
                                required
                                type="tel"
                                name="contact_phone"
                                className="form-component__form_main__input"
                                placeholder="+7 (999) 999-99-99"
                            />.</span>
                    </div>
                    <div className="form-component__form_footer">
                        <div className="form-component__form_footer__checkbox">
                            <label className="form-component__form_footer__checkbox_label">
                                <input type="checkbox" name="agreement" required />
                                <div className="checkbox__checkmark"></div>
                                <p className="checkbox__body">
                                    { t('persData') }
                                </p>
                            </label>
                        </div>
                        <button type="submit" className="form-component__form_footer__button">
                            { t('send') }
                        </button>
                    </div>
                </form>
                {
                    error === true &&
                    <div style={{color: 'red'}}>
                        {t('error')}
                        <div>{ errorMess.field_problems.contact_phone ? errorMess.field_problems.contact_phone[0] : null }</div>
                        <div>{ errorMess.field_problems.email ? errorMess.field_problems.email[0] : null }</div>
                    </div>
                }
                { error === false && (<div style={{color: 'green'}}>{t('success')}</div>) }
            </div>
        </div>
    )
}