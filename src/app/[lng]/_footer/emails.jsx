import * as React from "react";
import Footer from "@/app/[lng]/_footer/footer";
import {backendHost} from "@/lib/consts/consts";

async function getData(lng) {
    const res = await fetch(
        `${backendHost}/api/core.contacts?lang=${lng}`,
        {
            method: 'GET',
            cache: 'force-cache',
            next: { revalidate: 3600 }
        }
    )

    if (!res.ok) {
        console.log(res.status)
    }

    return res.json()
}

async function getFiles(lng) {
    const res = await fetch(
        `${backendHost}/api/core.files?lang=${lng}`,
        {
            method: 'GET',
            cache: 'force-cache',
            next: { revalidate: 3600 }
        }
    )

    if (!res.ok) {
        console.log(res.status)
    }

    return res.json()
}

export default async function Emails({lng}) {
    const emails = await getData(lng);
    const files = await getFiles(lng);

     return (
         <Footer emails={emails} files={files} lng={lng} />
    );
}