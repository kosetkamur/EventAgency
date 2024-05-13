"use client";
import "./style.scss";
import * as React from "react";
import tenYears from "@/public/images/tenYears.svg";
import mutedImg from "@/public/images/muted.svg";
import unmutedImg from "@/public/images/unmuted.svg";
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
                <Image src={tenYears} alt="10 лет"  className="parallax-components__blur_container__button_img" />
                <div className={muted ? "parallax-components__blur_container__button_btn__video" : "parallax-components__blur_container__button_btn__video parallax-components__blur_container__button_btn__muted" }>
                    <video width="100" height="100" loop muted={muted} autoPlay playsInline className="parallax-components__blur_container__button_btn__video_welcome">
                        <source src={`${backendHost}/${video}`} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                {
                    muted ? <Image src={mutedImg} alt="громкость"  className="parallax-components__blur_container__button_muted" /> :
                        <Image src={unmutedImg} alt="громкость"  className="parallax-components__blur_container__button_muted" />
                }
            </button>
        </>
    )
}