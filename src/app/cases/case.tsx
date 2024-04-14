"use client";
import "./style.scss";
import {useState} from "react";
import Link from "next/link";
import Image from "next/image";
import icon2 from "@/media/images/icon2.svg";
import mainArrow from "@/media/images/mainArrow.svg";

export default function Cases({cases}) {
    const [type, setType] = useState<string>("no");
    return (
        <div className="case-page">
            <h1 className="case-page__title">Кейсы</h1>
            <div className="case-page__filter">
                <button onClick={() => setType('no')} className="case-page__filter_button">
                    Все
                </button>
                <button onClick={() => setType('INTERNAL COMMUNICATIONS')} className="case-page__filter_button">
                    Наша работа
                </button>
                <button onClick={() => setType('EXTERNAL COMMUNICATIONS')} className="case-page__filter_button">
                    внутренние коммуникации
                </button>
            </div>
            <div className="case-page__cases">
                {
                    cases.data.map(item => (
                        <div key={item.id} className="case-page__cases_item">
                            <Link href={`/cases/${item.id}`}>
                                <Image src={`http://raigoreg.beget.tech/media/${item.cover_image}`}
                                       width="100"
                                       height="100"
                                       alt="кейс"
                                       className="case-page__cases_item__images" />
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
            </div>
        </div>
    );
}