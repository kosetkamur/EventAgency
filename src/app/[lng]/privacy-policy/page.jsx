// import FileViewer from 'react-file-viewer';
import {backendHost} from "@/lib/consts/consts";
import * as React from "react";
// import dynamic from 'next/dynamic';
//
// const FileViewer = dynamic(() => import('react-file-viewer'), {
//     ssr: false
// });


async function getFiles(lng) {
    const res = await fetch(
        `${backendHost}/api/core.files?lang${lng}`,
        {
            method: 'GET',
            cache: 'force-cache'
        }
    )

    return res.json()
}

export default async function PopupDocument({ params: { lng } }) {
    // const type = 'pdf';
    const files = await getFiles(lng);
    return (

        <iframe
            src={`${backendHost}/media/${files.presentation}`}
            title="Async & Performance"
            width="800"
            height="600"
        />
        // <FileViewer
        //     fileType={type}
        //     filePath={`${backendHost}/media/${files.presentation}`}
        // />
    );


}