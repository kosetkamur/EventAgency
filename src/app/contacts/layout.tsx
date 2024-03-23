import type {PropsWithChildren} from "react";

export default function ContactsLayout({children}: PropsWithChildren<unknown>) {
    return (
        <div>{children}</div>
    );
}
