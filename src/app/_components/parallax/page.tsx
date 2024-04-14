import "./style.scss";
import * as React from "react";
import Image from "next/image";
import button from "@/media/images/button.png";
import titleCase from "@/media/images/titleCase.svg";

export default async function Paralax() {
   return (
     <div className="parallax-components">
         <div className="containerAll">
             <div className="parallax-components__blur-container">
                 <div className="parallax-components__blur-container__button">
                     <Image src={button} alt="Кнопка" />
                 </div>
                 <div className="parallax-components__blur-container__text">
                     <p>
                         Добро пожаловать в мир неповторимых событий с Avantage Project!
                         Наши мероприятия не ограничиваются просто реализацией, они обеспечивают
                         беспрецедентный комфорт и невероятные впечатления.
                     </p>
                     <button>
                         ХОЧУ ЗНАТЬ БОЛЬШЕ
                     </button>
                 </div>
             </div>
             <div className="parallax-components__numbers">
                 <div className="parallax-components__numbers_num">
                     <div className="parallax-components__numbers_num">
                         <p className="parallax-components__numbers_num__title">
                             >
                         </p>
                         <div className="parallax-components__numbers_num__container">
                             <p className="parallax-components__numbers_num__title">
                                 5000
                             </p>
                             <p className="parallax-components__numbers_num__text">
                                 реализованных проектов
                             </p>
                         </div>
                     </div>
                 </div>
                 <div className="parallax-components__numbers_description">
                     <p className="parallax-components__numbers_description__text">
                         Под руководством Лилии Фёдоровой и Марии Рудаковой за 10 лет на рынке мы реализовали масштабные и запоминающиеся мероприятия со смыслами для бизнеса разных форматов.
                     </p>
                 </div>
             </div>
         </div>
         <div className="parallax-components__line"></div>
         <div className="containerAll">
             <div className="parallax-components__numbers">
                 <div className="parallax-components__numbers_num">
                     <p className="parallax-components__numbers_num__title">
                         >
                     </p>
                     <div className="parallax-components__numbers_num__container">
                         <p className="parallax-components__numbers_num__title">
                             28000
                         </p>
                         <p className="parallax-components__numbers_num__text">
                             уникальных сценариев
                         </p>
                     </div>
                 </div>
                 <div className="parallax-components__numbers_description">
                     <p className="parallax-components__numbers_description__text">
                         Мы готовы делиться опытом и экспертизой, объясняя каждый шаг. Мы креативим  совместно с вами в рамках бизнес задач. Мы топим за коллаборации и готовы стать вашим партнером на долгие годы.
                     </p>
                 </div>
             </div>
         </div>
         <div className="parallax-components__line"></div>
         <div className="containerAll">
             <div className="parallax-components__numbers">
                 <div className="parallax-components__numbers_num">
                     <p className="parallax-components__numbers_num__title">
                         <span className="parallax-components__numbers_num__title_none">></span>
                     </p>
                     <div className="parallax-components__numbers_num__container">
                         <p className="parallax-components__numbers_num__title">
                             15 <span className="parallax-components__numbers_num__title_year">лет</span>
                         </p>
                         <p className="parallax-components__numbers_num__text">
                             в event-индустрии
                         </p>
                     </div>
                 </div>
                 <div className="parallax-components__numbers_description">
                     <p className="parallax-components__numbers_description__text">
                         В 2014 году мы приняли решение работать по системе Agile ещё до того, как многие корпорации её приняли. Мы стали работать частично удалённо в 2018, ещё до того, как это стало мейнстримом. Мы развивались в 2020 и научились делать гибридные мероприятия настолько классно, что стали получать за них призы.
                     </p>
                 </div>
             </div>
         </div>
         <div className="parallax-components__buttons">
             <div className="parallax-components__buttons_item">
                 <a href="/"  className="parallax-components__buttons_item__btn1">Портфолио</a>
             </div>
             <div className="parallax-components__buttons_item">
                 <a href="/blog" className="parallax-components__buttons_item__btn2">медиа</a>
             </div>
         </div>
         <div className="parallax-components__title">
             <Image src={titleCase} alt="кейсы" width="100" height="100"  className="parallax-components__title_img" />
         </div>
     </div>
   )
}