import Cases from "@/app/[lng]/cases/case";
import ErrorServer from "@/app/[lng]/_components/error/error";
import {backendHost} from "@/lib/consts/consts";
import {useSearchParams} from "next/navigation";

async function getData(lng) {
    const res = await fetch(
        `${backendHost}/api/blog.case_list?lang=${lng}&case_type=EXTERNAL COMMUNICATIONS`,
        {
            method: 'GET',
        }
    )

    if (!res.ok) {
        <ErrorServer res={res} />
    }

    return res.json()
}

export default async function CasePage({ params: { lng, profile } }) {
    const cases = await getData(lng, profile);

    return (
        <Cases cases={cases} lng={lng} />
    );
}