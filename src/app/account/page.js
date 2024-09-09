
import { redirect } from "next/navigation";
import React from "react";

export default function Account() {
    const userProfileInfo = null
    if (userProfileInfo === null) redirect('products?search=product1&randomvalue=abcde')

    return <div>Account</div>;
}
