import "./style.scss";
import Image from "next/image";
import icon2 from '@/media/images/icon2.svg';
import mainArrow from "@/media/images/mainArrow.svg";
import Link from "next/link";

async function getData() {
    const res = await fetch(
        `http://raigoreg.beget.tech/api/blog.case_list?lang=ru&case_type=&show_on_main_page=true`,
        {
            method: 'GET',
        }
    )

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export default async function CaseMainComponent() {
    const cases = await getData();

    return (
        <div className="case-component">
            <div className="case-component__cases">
                {
                    cases.data.map(item => (
                        <div key={item.id} className="case-component__cases_item">
                            <Link href={`/cases/${item.id}`}>
                                <Image
                                    src={`http://raigoreg.beget.tech/${item.cover_image}`}
                                    alt="кейс"
                                    width="100"
                                    height="100"
                                    className="case-component__cases_item__images"
                                />
                                <div className="case-component__cases_item__buttons">
                                    <button className="case-component__cases_item__buttons_button">
                                        {item.year}
                                    </button>
                                    <button className="case-component__cases_item__buttons_button">
                                        <Image src={icon2} alt="" className="case-component__cases_item__buttons_button__icon" />
                                        <p className="case-component__cases_item__buttons_button__event">
                                            {item.customer.type}
                                        </p>
                                        <p className="case-component__cases_item__buttons_button__company">
                                            {item.customer.name}
                                        </p>
                                    </button>
                                </div>
                                <p className="case-component__cases_item__title">
                                    {item.title}
                                </p>
                            </Link>
                        </div>
                    ))
                }
            </div>
            <a href="/cases" className="case-component__showAll">
                <p className="case-component__showAll_title">
                    СМОТРЕТЬ ВСЕ ПРОЕКТЫ
                </p>
                <Image src={mainArrow} alt="стрелка" width="100" height="15" className="case-component__showAll_arrow" />
            </a>
        </div>
    );
}

