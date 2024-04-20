"use client";
import Image from "next/image";
import burger from "@/media/images/burger.svg";
import {useState} from "react";
import BurgerComponent from "@/app/[lng]/_components/burgerMenu/page";

export default  function ButtonHeader({files, lng}) {
    const [show, setShow] = useState(false);

    const closeBurger = (show) => {
        setShow(show);
    }

    return (
        <>
            <button className="header-desk-scroll__burger_item" onClick={()=> setShow(!show)}>
                <Image src={burger} alt="меню" />
            </button>
            { show && <BurgerComponent files={files} closeBurger={closeBurger} lng={lng} />}
        </>
    );
}