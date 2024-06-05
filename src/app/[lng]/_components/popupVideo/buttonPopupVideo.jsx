"use client";
import "./style.scss";
import * as React from "react";
import tenYears from "@/public/images/tenYears.svg";
import unmutedImg from "@/public/images/unmuted.svg";
import Image from "next/image";
import {backendHost} from "@/lib/consts/consts";

export default function ButtonPopupVideo({video}) {

    return (
        <>
            <button onClick={()=>document.getElementById('popup-video').style.display = 'block'} className="parallax-components__blur_container__button_btn">
                <Image src={tenYears} alt="10 лет"  className="parallax-components__blur_container__button_img" />
                <div className="parallax-components__blur_container__button_btn__video">
                    <video width="100" height="100" muted={true} autoPlay playsInline className="parallax-components__blur_container__button_btn__video_welcome">
                        <source src={`${backendHost}${video}`} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
               <Image src={unmutedImg} alt="громкость"  className="parallax-components__blur_container__button_muted" />
            </button>
        </>
    )
}