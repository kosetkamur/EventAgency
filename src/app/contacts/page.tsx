"use client";
import "./style.scss";
import GoTgComponent from "@/app/_components/tg/page";
import MarqeeComponent from "@/app/_components/marqee/page";
import Form from "@/app/_components/form/page";
import Contact from "@/app/contacts/_contact/page";



export default function ContactPage() {

    return (
        <div className="contact-page">
            <div className="containerAll">
                <Contact />
                <GoTgComponent />
            </div>
            <MarqeeComponent color={"#463CFF"} />
            <div className="containerAll">
                <Form />
            </div>
        </div>
    );
}