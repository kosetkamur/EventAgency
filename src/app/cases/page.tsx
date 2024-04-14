import Cases from "@/app/cases/case";
import ErrorServer from "@/app/_components/error/error";

async function getData() {
    const res = await fetch(
        `http://raigoreg.beget.tech/api/blog.case_list?lang=ru&case_type=&show_on_main_page=`,
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

export default async function CasePage() {
    const cases = await getData();

    return (
        <Cases cases={cases} />
    );
}




