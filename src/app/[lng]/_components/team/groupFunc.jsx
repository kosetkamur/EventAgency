"use client";
import "./style.scss";
import * as React from "react";
import CardComponent from "@/app/[lng]/_components/team/card/page";
import {useState} from "react";
import {useTranslation} from "@/app/i18n/client";

export default function GroupFunc({directors, lng}) {
    const [show, setShow] = useState(false);
    const { t } = useTranslation(lng,'translation');

    const handleShow = () => {
        setShow(!show)
    }

    return (
        <>
            <div className="team-component__team_button">
                <a
                    onClick={handleShow}
                    href={`/${lng}/about-us#allTeam`}
                    className="team-component__team_button__btn"
                >
                    {t('viewAll')}
                </a>
            </div>
            <div className="team-component__team_people">
            {
                show && directors.data.map(director =>
                    <div key={director.name} className="team-component__team_people__item" id="allTeam">
                        <CardComponent  name={director.name} position={director.position} photo={director.photo} />
                    </div>
                )
            }
            </div>
        </>
    );
}