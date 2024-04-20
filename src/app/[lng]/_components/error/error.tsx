"use client";
import "./style.scss";
import * as React from "react";

export default async function ErrorServer({ params: { lng, res } }) {

     return (
         <div className="error-page">
             <div className="error-page__container">
                 <p className="error-page__container_number">
                     { res.status ? res.status : null}
                 </p>
                 <p className="error-page__container_text">
                     { res.message ? res.message : null}
                 </p>
                 <p className="error-page__container_description">
                     К сожалению, произошла ошибка
                 </p>
                 <a
                    className="gotg-page__container_button"
                    href={`/${lng}`}
                 >
                     вернуться на главную
                 </a>
             </div>
         </div>
    )
}