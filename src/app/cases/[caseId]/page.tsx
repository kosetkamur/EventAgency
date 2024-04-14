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

async function getData(params) {
    const res = await fetch(
        `http://raigoreg.beget.tech/api/blog.case?lang=ru&id=${params.caseId}`,
        {
            method: 'GET',
        }
    )

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export default async function Artical({ params }: { params: { id: string }}) {
    const caseInfo = await getData(params);
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
                    {caseInfo.data.title}
                </h2>
            </div>
            <div className="article-page__description">
                <p>
                    {caseInfo.data.body}
                </p>
            </div>
            <Carousel
                showThumbs={false}
                renderArrowPrev={(onClickHandler, hasPrev) =>
                    hasPrev && (
                        <button type="button" className="article-page__description_button" onClick={onClickHandler} style={{ ...arrowStyles, left: 15 }}>
                            <Image src={arrowLeft} alt="стрелка влево" className="article-page__description_button__image" />
                        </button>
                    )
                }
                renderArrowNext={(onClickHandler, hasNext) =>
                    hasNext && (
                        <button type="button" onClick={onClickHandler} style={{ ...arrowStyles, right: 15 }}>
                            <Image src={arrowRight} alt="стрелка вправо" className="article-page__description_button__image" />
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
                {
                    caseInfo.data.photos.map(photo=>
                        <div>
                            <Image src={photo.file} alt="Фотография кейса" width="100" height="100" className="article-page__description_image" />
                        </div>
                    )
                }
            </Carousel>
            <Form />
        </div>
    );
}