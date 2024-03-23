import media from "../../media/images/case.png";
import icon2 from "../../media/images/icon2.svg";
import Image from "next/image";
import "./style.scss";
import Link from "next/link";

async function getData(case_type) {
    const res = await fetch(
        `http://raigoreg.beget.tech/api/blog.case_list?lang=ru&case_type=${case_type === 'no' ? '' : case_type}&show_on_main_page=`,
        {
            method: 'GET',
            // cache: 'force-cache',
        }
    )

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export default async function Cases({type}) {
    const cases = await getData(type);
    return (
        <>
            {
                cases.data.map(item => (
                    <div className="case-page__cases_item">
                        <Link href={`/cases/${item.title}`}>
                            <Image src={media} alt="" className="case-page__cases_item__images" />
                            <div className="case-page__cases_item__buttons">
                                <button className="case-page__cases_item__buttons_button">
                                    {item.year}
                                </button>
                                <button className="case-page__cases_item__buttons_button">
                                    <Image src={icon2} alt="" className="case-page__cases_item__buttons_button__icon" />
                                    <p className="case-page__cases_item__buttons_button__event">
                                        {item.customer.type}
                                    </p>
                                    <p className="case-page__cases_item__buttons_button__company">
                                        {item.customer.name}
                                    </p>
                                </button>
                            </div>
                            <p className="case-page__cases_item__title">
                                {item.title}
                            </p>
                        </Link>
                    </div>
                ))
            }
        </>
    );
}

