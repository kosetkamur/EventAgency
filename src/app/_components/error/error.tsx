"use client";
import "./style.scss";
import * as React from "react";

export default async function ErrorServer({res}) {

     return (
         <div className="error-page">
             <div className="error-page__container">
                 <p className="error-page__container_number">
                     {res.status}
                 </p>
                 <p className="error-page__container_text">
                     {res.message}
                 </p>
                 <p className="error-page__container_description">
                     К сожалению, произошла ошибка
                 </p>
                 <button
                    type="button"
                    className="gotg-page__container_button"
                    href="/"
                 >
                     вернуться на главную
                 </button>
             </div>
         </div>
    )
}