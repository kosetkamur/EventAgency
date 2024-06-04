import Cases from "@/app/[lng]/cases/case";
import {backendHost} from "@/lib/consts/consts";

async function getData(lng) {
    const res = await fetch(
        `${backendHost}/api/blog.case_list?lang=${lng}&case_type=INTERNAL COMMUNICATIONS`,
        {
            method: 'GET',
            
            cache: "force-cache"
        }
    )

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export default async function CasePage({ params: { lng, profile } }) {
    const cases = await getData(lng, profile);

    return (
        <Cases cases={cases} lng={lng} mice={false} />
    );
}