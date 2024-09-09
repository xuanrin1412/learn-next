import Link from "next/link";
import React from "react";

export default function NotFound() {
    return <div className="min-h-screen flex justify-center items-center">
        <div className="h-1/2 flex flex-col gap-3 ">
            <h1 className=" font-bold text-3xl">This page is not exist</h1>
            <Link href={'/'} className="p-2 border rounded-full w-fit mx-auto">Go back to home</Link>
        </div>

    </div>;
}
