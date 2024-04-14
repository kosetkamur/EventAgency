import "./style.scss";
import * as React from "react";

export default async function MarqeeComponent({color}) {
       return (
         <div className="marqee-page">
             <div className="marqee-page__container">
                 <p className="marqee-page__container_text" style={{"color": color}}>
                     #avtg #avtg #avtg #avtg #avtg #avtg#avtg #avtg #avtg #avtg #avtg #avtg
                 </p>
             </div>
             <div className="marqee-page__container">
                 <p className="marqee-page__container_text2" style={{"color": color}}>
                     #avtg #avtg #avtg #avtg #avtg #avtg#avtg #avtg #avtg #avtg #avtg #avtg
                 </p>
             </div>
         </div>
    )
}