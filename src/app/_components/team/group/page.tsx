import "../style.scss";
import * as React from "react";
import GroupFunc from "@/app/_components/team/group/groupFunc";

async function getData() {
    const res = await fetch(
        `http://raigoreg.beget.tech/api/core.team?lang=ru&is_chief=false`,
        {
            method: 'GET',
        }
    )

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export default async function GroupComponents() {
    const directors = await getData();

    return (
        <GroupFunc directors={directors} />
    );
}