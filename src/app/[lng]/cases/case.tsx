"use client";
import "./style.scss";
import {useState} from "react";
import CardCaseComponent from "@/app/[lng]/cases/card";

export default function Cases({cases,lng}) {
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
                        <CardCaseComponent key={item.id} lng={lng} item={item} />
                    ))
                }
            </div>
        </div>
    );
}