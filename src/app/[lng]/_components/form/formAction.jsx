"use server";

import {backendHost} from "@/lib/consts/consts";

export default async function formAction(formData) {
    try {
        const rawFormData = {
            full_name: formData.get('full_name'),
            project_goals: formData.get('project_goals'),
            email: formData.get('email'),
            contact_phone: formData.get('contact_phone'),
            agreement: formData.get('agreement') === "on" ? "true" : "false"
        }
        console.log(JSON.stringify(rawFormData))
        const response = await fetch(`${backendHost}/api/bids.cooperation.create`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(rawFormData),
        })

        console.log(response, response.data)

    } catch (error) {
        console.error(error);
    }
}