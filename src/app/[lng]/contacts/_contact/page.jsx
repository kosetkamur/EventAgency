import "../style.scss";
import {backendHost} from "@/lib/consts/consts";
import {useTranslation} from "@/app/i18n";

async function getData(lng) {
    const res = await fetch(
        `${backendHost}/api/core.contacts?lang=${lng}`,
        {
            method: 'GET',
            cache: "force-cache"
        }
    )

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export default async function Contact({lng}) {
    const contacts = await getData(lng);
    const { t } = await useTranslation(lng,'translation');


    return (
        <div className="contact-page__items">
            <div className="contact-page__items_item">
                <p className="contact-page__items_item__title">
                    {t('ADDRESS')}
                </p>
                <h4 className="contact-page__items_item__subtitle">
                    { contacts.data.address }
                </h4>
            </div>
            <div className="contact-page__items_item">
                <p className="contact-page__items_item__title">
                    {t('PHONENUMBER')}
                </p>
                <h4 className="contact-page__items_item__subtitle">
                    { contacts.data.contact_phone }
                </h4>
            </div>
            <div className="contact-page__items_item">
                <p className="contact-page__items_item__title">
                    {t('EMAIL')}
                </p>
                <h4 className="contact-page__items_item__subtitle">
                    { contacts.data.contact_email }
                </h4>
            </div>
        </div>
    );
}