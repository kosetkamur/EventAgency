import * as React from "react";
import "./style.scss";
import Image from "next/image";
import policy from "../../../public/images/privacy.svg"


export default async function PdfPage ({params: {lng}}){
    return <Image src={policy} className="privacy-policy" alt="политика конфиденциальности" />
};
