"use client";
import "./style.scss";
import GoTgComponent from "@/app/[lng]/_components/tg/page";
import MarqeeComponent from "@/app/[lng]/_components/marqee/page";
import Form from "@/app/[lng]/_components/form/page";
import Contact from "@/app/[lng]/contacts/_contact/page";



export default function ContactPage({ params: { lng } }) {

    return (
        <div className="contact-page">
            <div className="containerAll">
                <Contact lng={lng} />
                <GoTgComponent lng={lng} />
            </div>
            <MarqeeComponent color={"#463CFF"} />
            <div className="containerAll">
                <Form lng={lng} />
            </div>
        </div>
    );
}