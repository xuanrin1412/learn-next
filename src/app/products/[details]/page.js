"use client"
import { usePathname } from "next/navigation";
import React from "react";

export default function ProductDetails({ params }) {
    console.log("hi:", params);


    return <div>ProductDetails params</div>;
}
