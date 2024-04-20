import "../style.scss";
import {backendHost} from "@/lib/consts/consts";

async function getData(lng) {
    const res = await fetch(
        `${backendHost}/api/core.contacts?lang=${lng}`,
        {
            method: 'GET',
        }
    )

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export default async function Contact({lng}) {
    const contacts = await getData(lng);

    return (
        <div className="contact-page__items">
            <div className="contact-page__items_item">
                <p className="contact-page__items_item__title">
                    АДРЕС
                </p>
                <h4 className="contact-page__items_item__subtitle">
                    { contacts.data.address }
                </h4>
            </div>
            <div className="contact-page__items_item">
                <p className="contact-page__items_item__title">
                    ТЕЛЕФОН
                </p>
                <h4 className="contact-page__items_item__subtitle">
                    { contacts.data.contact_phone }
                </h4>
            </div>
            <div className="contact-page__items_item">
                <p className="contact-page__items_item__title">
                    ПОЧТА
                </p>
                <h4 className="contact-page__items_item__subtitle">
                    {/*{ contacts.data.contact_email }*/}
                    avantage@avantage-event.com
                </h4>
            </div>
        </div>
    );
}