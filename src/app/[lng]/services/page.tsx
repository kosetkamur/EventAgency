// "use client";
import ServicesComponent from "../_components/services/page";

import "./style.scss";
import CardsComponent from "@/app/[lng]/_components/cards/page";
import Image from "next/image";
import icon4 from "@/media/images/icon4.svg";
import * as React from "react";
import Link from "next/link";
import Form from "@/app/[lng]/_components/form/page";


export default function ServicesPage({ params: { lng } }) {
    return (
        <div className="services-page">
            <div className="containerAll">
                <div className="services-page__tagline">
                    <div className="services-page__tagline_container">
                        <p className="services-page__tagline_container__text services-page__tagline_container__align1">
                            мы реализуем
                        </p><br />
                        <p className="services-page__tagline_container__text services-page__tagline_container__align2">
                            <Image src={icon4} alt="солнышко" className="services-page__tagline_container__text_image" />  масштабные и
                        </p><br />
                        <p className="services-page__tagline_container__text services-page__tagline_container__align3">
                            запоминающиеся
                        </p><br />
                        <p className="services-page__tagline_container__text services-page__tagline_container__align4">
                            мероприятия
                        </p>
                    </div>
                </div>
                <ServicesComponent lng={lng} />
                <div className="services-page__button">
                    <Link href={`/${lng}/about-us`} className="services-page__button_btn">
                        почему мы
                    </Link>
                </div>
                <CardsComponent lng={lng} />
                <Form lng={lng} />
            </div>
        </div>
    );
}