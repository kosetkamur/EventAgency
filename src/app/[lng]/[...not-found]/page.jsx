import "./not-found.scss";
import Image from 'next/image'
import img404 from '@/public/images/404.svg'

export default async function Custom404() {
    return (
        <div className="error-page">
            <div className="error-page__container">
                <p className="error-page__container_number">
                    <Image src={img404} alt="404"  className="error-page__container_number__img" />
                </p>
                <p className="error-page__container_text">
                    Упс...страница не найдена
                </p>
                <p className="error-page__container_description">
                    К сожалению, запрашиваемая вами страница была перемещена или удалена, а возможно ее никогда не было
                </p>
                <a
                    type="button"
                    className="error-page__container_button"
                    href={`/ru`}
                >
                    вернуться на главную
                </a>
            </div>
        </div>
    )
}