export {};
// "use client";
// import "./style.scss";
// import * as React from "react";
// import {useTranslation} from "@/app/i18n/client";
// import PopupProject from "@/app/[lng]/_components/popupProject/popupProject";
// import {useState} from "react";
//
// export default function ServicePopupVideo({lng}) {
//     const { t } = useTranslation(lng, 'translation');
//     const [show, setShow] = useState(false);
//
//     const showPopup = () => {
//         setShow(true);
//     }
//
//     const closePopup = () => {
//         setShow(false);
//     }
//
//     return (
//         <>
//             <button className="services-component_item__ul_btn" onClick={showPopup}>
//                 {t('startCooperation')}
//             </button>
//             {show && <PopupProject lng={lng} closePopup={closePopup} />}
//         </>
//     )
// }