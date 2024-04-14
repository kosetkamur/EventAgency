import "./style.scss";
import * as React from "react";
import Image from 'next/image'
import servicesTop from '@/media/images/servicesTop.png'

async function getData() {
    const res = await fetch(
        `http://raigoreg.beget.tech/api/core.files?lang=ru`,
        {
            method: 'GET',
        }
    )

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export default async function ServicesComponent() {
    const refs = await getData();

    return (
        <>
            <div className="services-title">
                <Image src={servicesTop} alt="услуги" />
            </div>
            <div className="services-component">
                <div className="services-component_item">
                    <div className="services-component_item__title services-component_item__circle1">
                        <p>ДЛЯ КЛИЕНТОВ</p>
                    </div>
                    <div className="services-component_item__ul">
                        <a href="/services">
                            услуги
                        </a>
                        <a href="#">
                            условия работы
                        </a>
                        <a href="#">
                            почему именно мы
                        </a>
                        <a href={refs.data.brief}>
                            бриф
                        </a>
                        <a href={refs.data.portfolio}>
                            портфолио
                        </a>
                    </div>
                </div>
                <div className="services-component_item">
                    <div className="services-component_item__title services-component_item__circle2">
                        <p>ДЛЯ КАНДИДАТОВ И ПАРНЕРОВ</p>
                    </div>
                    <div className="services-component_item__ul">
                        <a href="#">
                            начать сотрудничество
                        </a>
                        <a href="#">
                            отправить резюме/презентацию
                        </a>
                        <a href="#">
                            почему стоит работать у нас
                        </a>
                        <a href={refs.data.form_for_freelancers}>
                            анкета для фрилансеров
                        </a>
                    </div>
                </div>
                <div className="services-component_item">
                    <div className="services-component_item__title services-component_item__circle3">
                        <p>ОФИЦИАЛЬНАЯ ИНФОРМАЦИЯ</p>
                    </div>
                    <div className="services-component_item__ul">
                        <a href={refs.data.requisites}>
                            реквизиты
                        </a>
                        <a href="#">
                            учредительные документы
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}
