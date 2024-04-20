import type {PropsWithChildren} from "react";

export default function BlogLayout({children}: PropsWithChildren<unknown>) {
    return (
        <div>{children}</div>
    );
}
