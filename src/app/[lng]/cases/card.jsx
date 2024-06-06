"use client";
import "./style.scss";
import Link from "next/link";
import Image from "next/image";
import icon2 from "@/public/images/icon2.svg";
import {backendHost} from "@/lib/consts/consts";

export default function CardCaseComponent({item,lng}) {

    return (
            <div key={item.id} className="case-page__cases_item">
                <Link href={`/${lng}/cases/${item.id}`} scroll={true}>
                    <Image src={`${backendHost}${item.cover_image}`}
                           width="100"
                           height="100"
                           alt="кейс"
                           className="case-page__cases_item__images" />
                    <div className="case-page__cases_item__buttons">
                        <button className="case-page__cases_item__buttons_button">
                            {item.year}
                        </button>
                        {item.customer ? 
 <button className="case-component__cases_item__buttons_button">
                                        <Image
                                            src={icon2} alt="" className="case-component__cases_item__buttons_button__icon" />
                        <p className="case-component__cases_item__buttons_button__event">
                                {item.customer.type}
                            </p> 
                                   <p className="case-component__cases_item__buttons_button__company">
                                {item.customer.name}
                            </p> 
                                    </button> : null}
                    </div>
                    <p className="case-page__cases_item__title">
                        {item.title}
                    </p>
                </Link>
            </div>
    );
}
