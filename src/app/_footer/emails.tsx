import * as React from "react";
import Footer from "@/app/_footer/footer";

async function getData() {
    const res = await fetch(
        `http://raigoreg.beget.tech/api/core.contacts?lang=ru`,
        {
            method: 'GET',
        }
    )

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

async function getFiles() {
    const res = await fetch(
        `http://raigoreg.beget.tech/api/core.files`,
        {
            method: 'GET',
        }
    )

    if (!res.ok) {
        console.log(res.status)
    }

    return res.json()
}

export default async function Emails() {
    const emails = await getData();
    const files = await getFiles();

     return (
         <Footer emails={emails} files={files} />
    );
}