"use client";
import arrowRight from "@/public/images/arrowRight.svg";
import arrowLeft from "@/public/images/arrowLeft.svg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Image from "next/image";

import './style.scss';
import Form from "@/app/[lng]/_components/form/page";
import {backendHost} from "@/lib/consts/consts";
import CardCaseComponent from "@/app/[lng]/cases/card";
import {useTranslation} from "@/app/i18n/client";
import * as React from "react";


export default function Artical({caseInfo, anotherCases, lng}) {
    const { t } = useTranslation(lng,'translation');

    let casesTwo = anotherCases.filter(item => item.id !== caseInfo.data.id).slice(0,2);
    const arrowStyles = {
        position: 'absolute',
        zIndex: 2,
        top: 'calc(50% - 15px)',
        width: '80px',
        height: '80px',
        cursor: 'pointer',
        border: '2px solid #D9D9D9',
        background: 'transparent',
        borderRadius: '50px',
        color: '#ffffff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };

    const indicatorStyles = {
        background: '#D9D9D9',
        width: '2.5%',
        height: 15,
        display: 'inline-block',
        margin: '0 15px',
        borderRadius: '50px',
    };

    let mainPhoto = caseInfo.data.photos.filter(photo => photo.is_main===true);
    let galleryPhoto = caseInfo.data.photos.filter(photo => photo.content_type==="image");

    return (
        <div className="article-page">
            <div className="containerAll">
                <div className="article-page__header">
                    {
                        mainPhoto[0].content_type === "image" ?
                            <Image src={`${backendHost}${mainPhoto[0].file}`}
                                   width="100"
                                   height="100"
                                   alt="Фотография кейса"
                                   className="article-page__header_image" /> :

                            <video width="auto" height="auto" loop muted playsInline autoPlay className="article-page__header_video">
                                <source src={`${backendHost}${mainPhoto[0].file}`} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                    }

                    <h2 className="article-page__header_title">
                        {caseInfo.data.title}
                    </h2>
                </div>
                <div className="article-page__description">
                    <div className="article-page__description_p" dangerouslySetInnerHTML={{ __html: caseInfo.data.body}} />
                </div>
                <div className="article-page__align">
                    <div className="article-page__align_photoTitle">
                        <p className="article-page__align_photoTitle__text">
                            [ {t('photo')} ]
                        </p>
                    </div>
                </div>
                <Carousel
                    showThumbs={false}
                    dynamicHeight={true}
                    showStatus={false}
                    renderArrowPrev={(onClickHandler, hasPrev) =>
                        hasPrev && (
                            <button type="button" className="article-page__description_button" onClick={onClickHandler} style={{ ...arrowStyles, left: 15 }}>
                                <Image src={arrowLeft} alt="стрелка влево" className="article-page__description_button__image" />
                            </button>
                        )
                    }
                    renderArrowNext={(onClickHandler, hasNext) =>
                        hasNext && (
                            <button type="button" className="article-page__description_button" onClick={onClickHandler} style={{ ...arrowStyles, right: 15 }}>
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
                                key={index}
                                role="button"
                                tabIndex={0}
                            />
                        );
                    }}
                >
                    {
                        galleryPhoto.map(photo =>
                            <div key={photo.id}>
                                <Image loading="lazy" src={`${backendHost}${photo.file}`} alt="Фотография кейса" width="100" height="100" className="article-page__description_image" />
                            </div>
                        )
                    }
                </Carousel>
                <Form lng={lng} />
                <div className="article-page__anotherCasesTitle">
                    <p className="article-page__anotherCasesTitle_text">
                        {t('otherCases')}
                    </p>
                </div>
                <div className="article-page__anotherCases">
                    {
                        casesTwo.map(item =>
                        <CardCaseComponent key={item.id} lng={lng} item={item} />
                        )
                    }
                </div>
            </div>
        </div>
    );
}