import "./[...not-found]/not-found.scss";
import Image from 'next/image'
import img404 from '@/public/images/404.svg'
import {useTranslation} from "@/app/i18n";

export default async function Custom404({ params: { lng } }) {
    const { t } = await useTranslation(lng);

    return (
        <div className="error-page">
            <div className="error-page__container">
                <p className="error-page__container_number">
                    <Image src={img404} alt="404"  className="error-page__container_number__img" />
                </p>
                <p className="error-page__container_text">
                    {t('bug')}
                </p>
                <p className="error-page__container_description">
                    {t('bugMessage')}
                </p>
                <a
                    type="button"
                    className="error-page__container_button"
                    href={`/${lng}`}
                >
                    {t("bugHref")}
                </a>
            </div>
        </div>
    )
}