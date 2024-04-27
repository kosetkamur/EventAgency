"use client";
import "./style.scss";
import * as React from "react";
import button from "@/public/images/button.svg";
import {useState} from "react";
import Image from "next/image";
import PopupVideo from "@/app/[lng]/_components/popupVideo/popupVideo";
import {backendHost} from "@/lib/consts/consts";

export default function ButtonPopupVideo({video}) {
    const [show, setShow] = useState(false);

    const showPopup = () => {
        setShow(true);
    }

    const closePopup = () => {
        setShow(false);
    }

    return (
        <>
            <button onClick={showPopup} className="parallax-components__blur_container__button_btn">
                <div className="parallax-components__blur_container__button_btn__video">
                    <video width="100" height="100" controls muted playsInline autoPlay  className="parallax-components__blur_container__button_btn__video_welcome">
                        <source src={`${backendHost}/${video}`} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <Image src={button} alt="Кнопка"  className="parallax-components__blur_container__button_img" />
            </button>
            {show && <PopupVideo video={video} closePopup={closePopup} />}
        </>
    )
}