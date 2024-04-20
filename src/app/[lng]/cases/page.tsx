import Cases from "@/app/[lng]/cases/case";
import ErrorServer from "@/app/[lng]/_components/error/error";
import {backendHost} from "@/lib/consts/consts";

async function getData(lng) {
    const res = await fetch(
        `${backendHost}/api/blog.case_list?lang=${lng}&case_type=&show_on_main_page=`,
        {
            method: 'GET',
        }
    )

    if (!res.ok) {
        <ErrorServer res={res} />
    }

    return res.json()
}
// ${case_type === 'no' ? '' : case_type}

export default async function CasePage({ params: { lng } }) {
    const cases = await getData(lng);

    return (
        <Cases cases={cases} lng={lng} />
    );
}




