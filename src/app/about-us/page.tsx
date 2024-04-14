"use client";
import "./style.scss";
import * as React from "react";

import TeamComponent from "@/app/_components/team/page";
import GoTgComponent from "@/app/_components/tg/page";
import PhotosComponent from "@/app/_components/photos/page";
import MarqeeComponent from "@/app/_components/marqee/page";
import Form from "@/app/_components/form/page";
import GroupComponents from "@/app/_components/team/group/page";

import Image from "next/image";
import titleTeam from "@/media/images/aboutTeam.svg";

export default function CasePage() {
    return (
        <div className="about-us-page">
            <div className="containerAll">
                <div className="about-us-page__tagline">
                    <div className="about-us-page__tagline_container">
                        <p className="about-us-page__tagline_container__text about-us-page__tagline_container__align1">
                            ПРИВЕТ!
                        </p>
                        <p className="about-us-page__tagline_container__text about-us-page__tagline_container__align2">
                            МЫ EVENT-АГЕНТСТВО
                        </p>
                        <p className="about-us-page__tagline_container__text about-us-page__tagline_container__align3">
                            AVANTAGE ПРОДЖЕКТ
                        </p>
                        <p className="about-us-page__tagline_container__description">
                            Основатели проекта – два сильных специалиста с многолетней экспертизой в сфере event-услуг, которые создали команду, ставшую топом рынка.
                        </p>
                    </div>
                </div>
            </div>
            <div className="containerAll">
                <div className="team-component__team-title">
                    <Image src={titleTeam} alt="команда" width="100" height="100" className="team-component__team-title_img" />
                </div>
                <TeamComponent />
                <div className="team-component__team">
                    <GroupComponents />
                </div>
            </div>
            <div id="marqeeMobile">
                <MarqeeComponent color={"#8751FF"} />
            </div>
            <div className="containerAll">
                <GoTgComponent />
                <h2 className="about-us-page__title">
                    ЛЮДИ И СОБЫТИЯ
                    AVANTAGE PROJECT
                </h2>
                <PhotosComponent />
            </div>
            <div id="marqeeDesktop">
                <MarqeeComponent color={"#8751FF"} />
            </div>
            <div className="containerAll">
                <Form />
            </div>
        </div>
    );
}