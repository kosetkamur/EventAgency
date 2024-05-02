"use client";
import "./style.scss";
import * as React from "react";
import {useTranslation} from "@/app/i18n/client";
import {createRef, useState} from "react";
import {backendHost} from "@/lib/consts/consts";

export default function PopupProject({lng, closePopup}) {
    const { t } = useTranslation(lng, 'translation');
    const [error, setError] = useState(null);
    const [errorMess, setErrorMess] = useState(null);

    async function handleSubmitClient(formData) {
        setError(null)

        const rawFormData = {
            full_name: formData.get('full_name'),
            project_goals: formData.get('project_goals'),
            project_scope: formData.get('project_scope'),
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

    const handleClose = () => {
        closePopup();
    }

     return (
         <div className="popup-project">
             <div className="popup-project__bg">
                 <div className="popup-project__bg_container">
                     <div className="popup-project__bg_container__close" onClick={handleClose}>
                        <button className="popup-project__bg_container__close_btn"></button>
                     </div>
                     <div className="popup-project__bg_container__text">
                         <p className="popup-project__bg_container__text_title">
                             {t('TELLUSABOUTYOURPROJECT')}
                         </p>
                         <p className="popup-project__bg_container__text_subtitle">
                             {t('TELLUSABOUTYOURPROJECTText')}
                         </p>
                         <form className="popup-project__bg_container__text_form" ref={ref} action={submitHandler}>
                             <input
                                 required
                                 type="text"
                                 name="full_name"
                                 className="popup-project__bg_container__text_input"
                                 placeholder={t('whatisyourname').toUpperCase()}
                             />
                             <input
                                 required
                                 type="text"
                                 name="email"
                                 className="popup-project__bg_container__text_input"
                                 placeholder="EMAIL"
                             />
                             <input
                                 required
                                 type="tel"
                                 name="contact_phone"
                                 className="popup-project__bg_container__text_input"
                                 placeholder={t('phonenumber').toUpperCase()}
                             />
                             <input
                                 required
                                 type="text"
                                 name="project_scope"
                                 className="popup-project__bg_container__text_input"
                                 placeholder={t('businessfield').toUpperCase()}
                             />
                             <input
                                 required
                                 type="text"
                                 name="project_goals"
                                 className="popup-project__bg_container__text_input"
                                 placeholder={t('projectgoalsandobjectives').toUpperCase()}
                             />
                             <div className="popup-project__bg_container__text_checkbox">
                                 <label className="popup-project__bg_container__text_checkbox__label">
                                     <input type="checkbox" name="agreement" required />
                                     <div className="checkbox__checkmark"></div>
                                     <p className="checkbox__body">
                                         {t('persData')}
                                     </p>
                                 </label>
                             </div>
                             <input
                                 type="submit"
                                 className="popup-project__bg_container__text_submit"
                                 value={t('SEND')}
                             />
                         </form>
                         {
                             error === true &&
                             <div style={{color: 'red', paddingTop: '10px'}} className="popup-project__bg_container__text_bug">
                                 {t('error')}
                                 <div>{ errorMess.field_problems.contact_phone ? errorMess.field_problems.contact_phone[0] : null }</div>
                                 <div>{ errorMess.field_problems.email ? errorMess.field_problems.email[0] : null }</div>
                             </div>
                         }
                         { error === false && (<div style={{color: 'green', paddingTop: '10px'}}>{t('success')}</div>) }
                     </div>
                 </div>
             </div>
         </div>
    )
}