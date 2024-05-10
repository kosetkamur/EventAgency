import "./style.scss";
import * as React from "react";
import {backendHost} from "@/lib/consts/consts";
import {fallbackLng, languages} from "@/app/i18n/settings";
import {useTranslation} from "@/app/i18n";
import SentDocs from "@/app/[lng]/_components/services/sentDocs";
import ServicePopupVideo from "@/app/[lng]/_components/popupProject/servicePopupProject";

async function getData(lng) {
    const res = await fetch(
        `${backendHost}/api/core.files?lang=${lng}`,
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

export default async function ServicesComponent({lng, id}) {
    const refs = await getData(lng);
    if ([...languages].indexOf(lng) < 0) lng = fallbackLng
    const { t } = await useTranslation(lng, 'translation')

    return (
        <div id={id}>
            <div className="services-title">
                <div className="services-title__photoTitle">
                    <p className="services-title__photoTitle_text">
                        [ {t('services')} ]
                    </p>
                </div>
            </div>
            <div className="services-component">
                <div className="services-component_item">
                    <div className="services-component_item__title services-component_item__circle1">
                        <p>{t('forClients')}</p>
                    </div>
                    <div className="services-component_item__ul">
                        <a href={`/${lng}/services`}>
                            {t('services')}
                        </a>
                        <a href={`/${lng}/services#form`}>
                            {t('howWeWork')}
                        </a>
                        <a href={`/${lng}/about-us`}>
                            {t('whyUs')}
                        </a>
                        <a href={`${backendHost}/media/${refs.data.brief}`} download>
                            {t('brief')}
                        </a>
                        <a href={`${backendHost}/media/${refs.data.brief}`} download>
                            {t('portfolio')}
                        </a>
                    </div>
                </div>
                <div className="services-component_item">
                    <div className="services-component_item__title services-component_item__circle2">
                        <p> {t('forCandidates')}</p>
                    </div>
                    <div className="services-component_item__ul">
                        <ServicePopupVideo lng={lng} />
                        <a href={`mailto:l.fedorova@avantage-event.com`}>
                            {t('sendYourCV')}
                        </a>
                        <a href={`/${lng}/about-us`}>
                            {t('whyYouShouldWork')}
                        </a>
                        <a href={`${backendHost}/media/${refs.data.form_for_freelancers}`} download>
                            {t('freelancerQuestionnaire')}
                        </a>
                    </div>
                </div>
                <div className="services-component_item">
                    <div className="services-component_item__title services-component_item__circle3">
                        <p>{t('COMPANYPROFILE')}</p>
                    </div>
                    <div className="services-component_item__ul">
                        <a href={`${backendHost}/media/${refs.data.requisites}`} download>
                            {t('requisites')}
                        </a>
                        <SentDocs lng={lng} />
                    </div>
                </div>
            </div>
        </div>
    )
}
