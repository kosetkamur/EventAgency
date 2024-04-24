"use client";
import "./style.scss";
import * as React from "react";
import button from "@/public/images/button.png";
import {useState} from "react";
import Image from "next/image";
import PopupVideo from "@/app/[lng]/_components/popupVideo/popupVideo";

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
            <button onClick={showPopup}>
                <Image src={button} alt="Кнопка"  className="parallax-components__blur_container__button_img" />
            </button>
            {show && <PopupVideo video={video} closePopup={closePopup} />}
        </>
    )
}