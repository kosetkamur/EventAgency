"use client";
import "./style.scss";
import * as React from "react";
import {backendHost} from "@/lib/consts/consts";

export default function PopupVideo({closePopup, video}) {
    const handleClose = () => {
        closePopup();
    }

     return (
         <div className="popup-video">
             <div className="popup-video__container">
                 <div className="popup-video__container_close" onClick={handleClose}>
                     <button className="popup-video__container_close__btn"></button>
                 </div>
                 <video width="auto" height="auto" controls muted playsInline autoPlay  className="popup-video__container_video">
                     <source src={`${backendHost}/${video}`} type="video/mp4" />
                     Your browser does not support the video tag.
                 </video>
             </div>
         </div>
    )
}