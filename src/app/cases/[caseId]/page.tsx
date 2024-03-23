'use client';
import arrowRight from "@/media/images/arrowRight.svg";
import arrowLeft from "@/media/images/arrowLeft.svg";
import caseID from "@/media/images/caseId.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Image from "next/image";

import './style.scss';
import {CSSProperties} from "react";
import Form from "@/app/_components/form/page";

export default function Artical({ params }: { params: { id: string }}) {
    const arrowStyles: CSSProperties = {
        position: 'absolute',
        zIndex: 2,
        top: 'calc(50% - 15px)',
        width: '4%',
        height: '9%',
        cursor: 'pointer',
        border: '2px solid #D9D9D9',
        background: 'transparent',
        borderRadius: '50px',
        color: '#ffffff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };

    const indicatorStyles: CSSProperties = {
        background: '#D9D9D9',
        width: '2.5%',
        height: 15,
        display: 'inline-block',
        margin: '0 15px',
        borderRadius: '50px',
    };

    return (
        <div className="article-page">
            <div className="article-page__header">
                <Image src={caseID} alt="Фотография кейса" className="article-page__header_image" />
                <h2 className="article-page__header_title">
                    Фобия Qiwi Strё
                </h2>
            </div>
            <div className="article-page__description">
                <p>
                    Традиционно в конце года для компании Qiwi мы провели внутрикорпоративное офлайн событие для 300 человек, приуроченное к календарному празднику Хэллоуин.<br /><br />

                    В 2020-м году задача трансформировалась к проведению гибридного события в связи с ограничениями относительно проведения массовых мероприятий, и перед нами стояла задача организовать офлайн событие для 30 участников, транслируемое в онлайн формате для 200 человек.<br /><br />

                    Мы осуществили это в кинопавильоне Amedia Group. За 1,5 часа 6 команд по 5 человек, которых выбрали накануне случайным<br /><br />
                    образом среди всех желающих, проходили жуткие и мерзкие испытания в формате ток-шоу в комнате страха. Всё завершилось финальным состязанием, где команды объединились, прошли настоящую арену смерти и выяснили, что страх лишь в их голове.
                </p>
            </div>
            <Carousel
                showThumbs={false}
                renderArrowPrev={(onClickHandler, hasPrev) =>
                    hasPrev && (
                        <button type="button" className="article-page__description_button" onClick={onClickHandler} style={{ ...arrowStyles, left: 15 }}>
                            <Image src={arrowLeft} className="article-page__description_button__image" />
                        </button>
                    )
                }
                renderArrowNext={(onClickHandler, hasNext) =>
                    hasNext && (
                        <button type="button" onClick={onClickHandler} style={{ ...arrowStyles, right: 15 }}>
                            <Image src={arrowRight} className="article-page__description_button__image" />
                        </button>
                    )
                }
                renderIndicator={(onClickHandler, isSelected, index) => {
                    if (isSelected) {
                        return (
                            <li
                                style={{ ...indicatorStyles, background: '#00BBB6', width: '5%' }}
                            />
                        );
                    }
                    return (
                        <li
                            style={indicatorStyles}
                            onClick={onClickHandler}
                            onKeyDown={onClickHandler}
                            value={index}
                            key={index}
                            role="button"
                            tabIndex={0}
                        />
                    );
                }}
            >
                <div>
                    <Image src={caseID} alt="Фотография кейса" className="article-page__description_image" />
                </div>
                <div>
                    <Image src={caseID} alt="Фотография кейса" className="article-page__description_image" />
                </div>
                <div>
                    <Image src={caseID} alt="Фотография кейса" className="article-page__description_image" />
                </div>
                <div>
                    <Image src={caseID} alt="Фотография кейса" className="article-page__description_image" />
                </div>
                <div>
                    <Image src={caseID} alt="Фотография кейса" className="article-page__description_image" />
                </div>
            </Carousel>
            <Form />
        </div>
    );
}