import arrowForm from "@/media/images/arrowForm.svg";
import icon3 from "@/media/images/icon3.svg";
import Image from "next/image";

import "./style.scss";
import {useState} from "react";

export default function Form() {
    const [value, setValue] = useState('');

    return (
        <div className="form-component">
            <div className="form-component__title">
                <p className="form-component__title_p">
                    <Image src={icon3} alt="стрелка вниз" /> ЧТОБЫ  <span> СВЯЗАТЬСЯ</span>,
                </p>
                <p className="form-component__title_p">
                    НАПИШИ НАМ ПИСЬМО <Image src={arrowForm} alt="стрелка вниз" />
                </p>
            </div>
            <div className="form-component__form">
                <div className="form-component__form_header">
                    <p>
                        КОМУ:  AVANTAGE PROJECT
                    </p>
                    <p>
                        ТЕМА: МЕРОПРИЯТИЕ
                    </p>
                </div>
                <div className="form-component__form_main">
                    <p className="form-component__form_main__text">
                        ПРИВЕТ, Я
                    </p>
                    <input
                        type="text"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        className="form-component__form_main__input"
                    />
                    <p className="form-component__form_main__text">
                        .
                    </p>
                    <p className="form-component__form_main__text">
                        НАМ НУЖНО СДЕЛАТЬ
                    </p>
                    <input
                        type="text"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        className="form-component__form_main__input"
                    />
                    <p className="form-component__form_main__text">
                        ,
                    </p>
                    <p className="form-component__form_main__text">
                        И ЧТОБЫ ВСЕ БЫЛО В ЛУЧШЕМ ВИДЕ.
                    </p>
                    <p className="form-component__form_main__text">
                        СВЯЖИТЕСЬ СО МНОЙ: ВОТ МОЯ ПОЧТА
                    </p>
                    <input
                        type="text"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        className="form-component__form_main__input"
                    />
                    <p className="form-component__form_main__text">
                        И ТЕЛЕФОН
                    </p>
                    <input
                        type="text"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        className="form-component__form_main__input"
                    />
                    <p className="form-component__form_main__text">
                        .
                    </p>
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
                    <button className="form-component__form_footer__button">
                        отправить
                    </button>
                </div>
            </div>
        </div>
    )
}