"use client";
import "./style.scss";
import {useState} from "react";
import Cases from "@/app/cases/case";

export default function CasePage() {
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
                <Cases type={type} />
            </div>
        </div>
    );
}

