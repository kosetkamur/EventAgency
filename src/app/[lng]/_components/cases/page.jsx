import "./style.scss";
import Image from "next/image";
import icon2 from '@/public/images/icon2.svg';
import mainArrow from "@/public/images/mainArrow.svg";
import Link from "next/link";
import {backendHost} from "@/lib/consts/consts";
import {useTranslation} from "@/app/i18n";

async function getData(lng) {
    const res = await fetch(
        `${backendHost}/api/blog.case_list?lang=${lng}&case_type=&show_on_main_page=true`,
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

export default async function CaseMainComponent({lng, id}) {
    const cases = await getData(lng);
    const { t } = await useTranslation(lng,'translation');

    return (
        <div className="case-component" id={id}>
            <div className="case-component__cases">
                {
                    cases.data.map(item => (
                        <div key={item.id} className="case-component__cases_item">
                            <Link href={`/${lng}/cases/${item.id}`}>
                                <Image
                                    src={`${backendHost}/${item.cover_image}`}
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
            <a href={`/${lng}/cases`} className="case-component__showAll">
                <p className="case-component__showAll_title">
                    {t('VIEWALLPROJECTS')}
                </p>
                <Image src={mainArrow} alt="стрелка" width="100" height="15" className="case-component__showAll_arrow" />
            </a>
        </div>
    );
}

