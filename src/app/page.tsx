import * as React from "react";

import "./style.scss";

import Image from 'next/image';
import icon1 from '../media/images/icon1.svg';
import ServicesComponent from "@/app/_components/services/page";
import {Metadata} from "next";
import Paralax from "@/app/_components/parallax/page";
import CaseMainComponent from "@/app/_components/cases/page";
import AwardComponent from "@/app/_components/award/page";

export const metadata: Metadata = {
    title: "Главная",
    description: "Ивент агентство",
};

export default function Home() {
    return (
        <main className="main-page">
            <section className="main-page__video">
                {/*<video width="100%" controls autoPlay loop preload="auto" playsInline>*/}
                {/*    <source src="../media/video/showreal.mp4" type="video/mp4" />*/}
                {/*    Your browser does not support the video tag.*/}
                {/*</video>*/}
            </section>
            <section className="main-page__container">
                <div className="main-page__tagline">
                    <div className="main-page__tagline_container">
                        <p className="main-page__tagline_container__text main-page__tagline_container__align1">
                            ВЫ ДОВЕРЯЕТЕ
                        </p><br />
                        <p className="main-page__tagline_container__text main-page__tagline_container__align2">
                            НАМ СОБЫТИЯ, <Image src={icon1} alt="солнышко" className="main-page__tagline_container__text_image" />  МЫ
                        </p><br />
                        <p className="main-page__tagline_container__text main-page__tagline_container__align3">
                            ОПРАВДЫВАЕМ ДОВЕРИЕ
                        </p>
                    </div>
                </div>
                <ServicesComponent />
            </section>
            <Paralax />
            <div className="containerAll">
                <CaseMainComponent />
            </div>
            <AwardComponent />
        </main>
    );
}