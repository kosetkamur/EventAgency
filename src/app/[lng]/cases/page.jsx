import Cases from "@/app/[lng]/cases/case";
import ErrorServer from "@/app/[lng]/_components/error/error";
import {backendHost} from "@/lib/consts/consts";
import {useSearchParams} from "next/navigation";

export const metadata = {
    title: "Кейсы",
    description: "Организация мероприятий для бизнеса b2b под ключ в одном из лучших event-агентств Москвы в online, offline и гибридном форматах. Организовываем фестивали, форумы, конференции, выставки, тренинги, ивенты для бизнеса. Moscow event агентство, которое оказывает услуги организатора мероприятий.",
    keywords: "услуги организатора мероприятий, организовать мероприятие, мероприятие для бизнеса, ивент, event, b2b, мероприятие в москве, площадки для мероприятий, корпоратив, фестиваль, форум, конференция, выставка, конгресс, пленарное заседание, тренинги, обучение персонала, семинары, онбординг, мотивация, выездные мероприятия, тимбилдинг, гендерные мероприятия, family day, клиентские мероприятия, презентация продукта/лонч, активности и мероприятия, направленные на позиционирование бренда, фестивали, выставки, интеграции бренда в события, деловые завтраки, деловой туризм, лучшие event-агентства Москвы, топ-агентств по организации мероприятий, кейсы организации мероприятий, топ-лучших мероприятий 2023, Событие Года, лучшие агентства по организации мероприятий,  event агентство, event агентство москва, event агентства спб, event агентство мероприятий, event праздничные агентства, организация event агентство, event агентство новосибирск, услуги event агентства, event агентство отзывы, ивент агентство, event, event агентство вакансии, лучшее event агентство, бизнес event агентство, event агентство организация мероприятий, фотограф event агентств, event агентства россии, топ event агентств, event услуги, moscow event агентство, крупное event агентство, рейтинг event агентств, работа в event агентстве, услуги event агентства, event услуги, услуги питания +для event агентств, кейтеринг, организация мероприятий кейсы"
};

async function getData(lng) {
    const res = await fetch(
        `${backendHost}/api/blog.case_list?lang=${lng}&case_type=&show_on_main_page=`,
        {
            method: 'GET',
            cache: 'force-cache'
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




