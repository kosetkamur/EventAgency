import "./style.scss";
import * as React from "react";
import GroupFunc from "@/app/[lng]/_components/team/groupFunc";
import {backendHost} from "@/lib/consts/consts";

async function getData(lng) {
    const res = await fetch(
        `${backendHost}/api/core.team?lang=${lng}&is_chief=false`,
        {
            method: 'GET',
            next: { revalidate: 3600 },
        }
    )

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export default async function GroupComponents({lng}) {
    const directors = await getData(lng);
    return (
        <GroupFunc directors={directors} lng={lng} />
    );
}