import React from 'react';
import ServicesComponent from "@/app/[lng]/_components/services/page";
import PopupDocument from "@/app/[lng]/_components/popup/popupDocument";

const PopupEventService = ({lng, id}) => {
    return (
        <>
            <ServicesComponent lng={lng} id={id} />
            { show && <PopupDocument lng={lng} closePopup={closePopup} />}
        </>
    );
};

export default PopupEventService;