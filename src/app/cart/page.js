'use client'
import { useParams, usePathname, useSearchParams } from "next/navigation";
import React from "react";

export default function Cart() {
    const pathname = usePathname()
    console.log({ pathname });

    const searchParams = useSearchParams()
    console.log(searchParams.get("search"));
    console.log(searchParams.get("randomvalue"));


    return <div>Cart</div>;
}
