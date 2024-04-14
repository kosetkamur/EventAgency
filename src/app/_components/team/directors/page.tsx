import "../style.scss";
import * as React from "react";
import CardComponent from "@/app/_components/team/directors/card/page";

async function getData() {
    const res = await fetch(
        `http://raigoreg.beget.tech/api/core.team?lang=ru&is_chief=true`,
        {
            method: 'GET',
        }
    )

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export default async function DirectorsComponents() {
    const directors = await getData();

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