"use client";
import "../style.scss";
import * as React from "react";
import CardComponent from "@/app/[lng]/_components/team/directors/card/page";
import {useState} from "react";

export default function GroupFunc({directors, lng}) {
    const [show, setShow] = useState(false);

    return (
        <>
            <div className="team-component__team_button">
                <button
                    onClick={() => setShow(!show)}
                    className="team-component__team_button__btn"
                >
                    смотреть всех
                </button>
            </div>
            <div className="team-component__team_people">
            {
                show && directors.data.map(director =>
                    <div key={director.name} className="team-component__team_people__item">
                        <CardComponent  name={director.name} position={director.position} photo={director.photo} />
                    </div>
                )
            }
            </div>
        </>
    );
}