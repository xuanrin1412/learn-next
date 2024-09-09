"use client"
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";


//useRouter -> next/navigation

export default function Home() {

  const router = useRouter()
  console.log({ router });

  const handlenavigate = () => {
    router.push('products')
  }

  return (
    <div className="flex flex-col justify-center items-center pt-10">
      <Link href={'products'}>Navigate to Products page</Link>
      <Link href={'account'}>Navigate to Account page</Link>

      <h2 className="font-bold text-xl py-4">Alternative way to navigating to another router</h2>

      <button onClick={handlenavigate}>navigate to Products using useRouter </button>


    </div>
  );
}
