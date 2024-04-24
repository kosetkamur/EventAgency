"use client";
import "./style.scss";
import CardCaseComponent from "@/app/[lng]/cases/card";
import {useTranslation} from "@/app/i18n/client";

export default function Cases({cases, lng}) {
    const { t } = useTranslation(lng,'translation');

    return (
        <div className="case-page">
            <h1 className="case-page__title">{t('navCases')}</h1>
            <div className="case-page__filter">
                <a href={`/${lng}/cases`} className="case-page__filter_button">
                    {t('all')}
                </a>
                <a href={`/${lng}/cases/internal`} className="case-page__filter_button">
                    {t('internalCommunications')}
                </a>
                <a href={`/${lng}/cases/external`} className="case-page__filter_button">
                    {t('externalСommunications')}
                </a>
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