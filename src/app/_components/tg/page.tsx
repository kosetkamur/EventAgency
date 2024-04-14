import "./style.scss";
import * as React from "react";

export default async function GoTgComponent() {
    const openPopup = () => {
        console.log('open')
    }

     return (
         <div className="gotg-page">
             <div className="gotg-page__container">
                 <p className="gotg-page__container_text">
                     Cледить за нашими успехами можно
                     в Telegram. Подписывайтесь: мы делимся полезным контентом и честно показываем, как уcтроено event-агентство
                 </p>
                 <button
                    type="button"
                    className="gotg-page__container_button"
                    onClick={openPopup}
                 >
                     подписаться
                 </button>
             </div>
         </div>
    )
}