import "../style.scss";

async function getData() {
    const res = await fetch(
        `http://raigoreg.beget.tech/api/core.contacts?lang=ru`,
        {
            method: 'GET',
            cache: 'force-cache',
        }
    )

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export default async function Contact() {
    const contacts = await getData();

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