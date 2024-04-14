import "./style.scss";
import * as React from "react";

export default async function Error() {

     return (
         <div className="error-page">
             <div className="error-page__container">
                 <p className="error-page__container_number">
                     404
                 </p>
                 <p className="error-page__container_text">
                     Упс...страница не найдена
                 </p>
                 <p className="error-page__container_description">
                     К сожалению, запрашиваемая вами страница была перемещена или удалена, а возможно ее никогда не было
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