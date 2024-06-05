"use client";
import "./style.scss";
import * as React from "react";
import {backendHost} from "@/lib/consts/consts";
import {useState} from "react";

export default function PopupVideo({video}) {
    const [muted, setMuted] = useState(true);
    const handleClose = () => {
        setMuted(true);
        document.getElementById('popup-video').style.display = 'none';
        document.getElementById('video-avt').muted = true;
    }
     return (
         <div className="popup-video" id="popup-video">
             <div className="popup-video__container">
                 <div className="popup-video__container_close">
                     <button onClick={handleClose} className="popup-video__container_close__btn"></button>
                 </div>
                 <video id="video-avt" width="auto" height="auto" controls muted={muted} playsInline autoPlay className="popup-video__container_video">
                     <source id="video-avt" src={`${backendHost}/${video}`} type="video/mp4" />
                     Your browser does not support the video tag.
                 </video>
             </div>
         </div>
    )
}