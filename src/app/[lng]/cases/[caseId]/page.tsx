import Artical from "@/app/[lng]/cases/[caseId]/index";
import {backendHost} from "@/lib/consts/consts";

async function getData(params) {
    const res = await fetch(
        `${backendHost}/api/blog.case?lang=${params.lng}&id=${params.caseId}`,
        {
            method: 'GET',
            cache: 'force-cache'
        }
    )

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

async function getCase(params) {
    const res = await fetch(
        `${backendHost}/api/blog.case_list?lang=${params.lng}&case_type=&show_on_main_page=`,
        {
            method: 'GET',
            cache: 'force-cache'
        }
    )

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export default async function ArticleComponent({ params }: { params: { id, lng } }) {
    const caseInfo = await getData(params);
    const data = await getCase(params);
    return (
       <Artical lng={params.lng} caseInfo={caseInfo} key={caseInfo.data.id} anotherCases={data.data} />
    );
}