"use client"

import { useRouter } from "next/navigation";

useRouter;

export default function Order() {

    const router=useRouter()
    const handleClick= () => {
        console.log("Placing your order");
        router.push("/")
    }
  return (
    <div className="my-5 mx-3">
      <h1 className=" text-2xl font-bold text-center py-2">Order product</h1>
        <button onClick={handleClick} className="py-2 px-4 bg-blue-600 text-white font-medium rounded-md hover:scale-105 duration-100">Place order</button>
    </div>
  );
}
