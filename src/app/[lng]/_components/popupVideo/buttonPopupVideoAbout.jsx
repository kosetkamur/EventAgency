"use client";
import "./style.scss";
import * as React from "react";
import {useState} from "react";
import Image from "next/image";
import PopupVideo from "@/app/[lng]/_components/popupVideo/popupVideo";
import play from "@/public/images/aboutPlay.svg";

export default function ButtonPopupVideoAbout({video}) {

    const showPopup = () => {
        document.getElementById('popup-video').style.display = 'block'
    }

    return (
        <>
            <button className="team-component__container_item__bottom_button__btn" onClick={showPopup}>
                <Image
                    src={play}
                    alt="начать видео"
                    width="100"
                    className="team-component__container_item__bottom_button__btn_img"
                    height="100" />
            </button>
            <PopupVideo video={video} />
        </>
    )
}