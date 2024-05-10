"use client";
import "./style.scss";
import * as React from "react";
import button from "@/public/images/button.svg";
import {useState} from "react";
import Image from "next/image";
import {backendHost} from "@/lib/consts/consts";

export default function ButtonPopupVideo({video}) {
    const [muted, setMuted] = useState(true);

    const unMuted = () => {
        setMuted(!muted)
    }

    return (
        <>
            <button onClick={unMuted} className="parallax-components__blur_container__button_btn">
                <div className="parallax-components__blur_container__button_btn__video">
                    <video width="100" height="100" loop muted={muted} playsInline autoPlay className="parallax-components__blur_container__button_btn__video_welcome">
                        <source src={`${backendHost}/${video}`} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <Image src={button} alt="Кнопка"  className="parallax-components__blur_container__button_img" />
            </button>
        </>
    )
}