import "../style.scss";
import * as React from "react";
import CardComponent from "@/app/[lng]/_components/team/directors/card/page";
import {backendHost} from "@/lib/consts/consts";

async function getData(lng) {
    const res = await fetch(
        `${backendHost}/api/core.team?lang=${lng}&is_chief=true`,
        {
            method: 'GET',
            cache: 'force-cache'
        }
    )

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export default async function DirectorsComponents({lng}) {
    const directors = await getData(lng);

    return (
        <>
            {
                directors.data.map(director =>
                    <div key={director.name} className="team-component__container_item">
                        <CardComponent  name={director.name} position={director.position} photo={director.photo} />
                    </div>
                )
            }
        </>
    );
}