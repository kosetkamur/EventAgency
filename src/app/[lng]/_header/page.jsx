import * as React from "react";
import {backendHost} from "@/lib/consts/consts";
import HeaderComponent from "@/app/[lng]/_header/header";

async function getFiles(lng) {
    const res = await fetch(
        `${backendHost}/api/core.files?lang=${lng}`,
        {
            method: 'GET',
            
            cache: "force-cache"
        }
    )

    if (!res.ok) {
        console.log(res.status)
    }

    return res.json()
}

export default async function Header({lng}) {
    const files = await getFiles(lng);
    return (
        <HeaderComponent lng={lng} files={files} />
    );
}