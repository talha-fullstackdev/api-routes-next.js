"use client"
import React from "react";
import { useRouter } from "next/navigation";
const page = () => {
  const router = useRouter()
  const handleClick =()=>{
        alert("Your order has been succesfully placed!")
        // router.push("/about") // back to the provided route
        // router.back() // back to previous route location
        router.replace("/")
  }
  return (
    <div>
      <h1>products page</h1>
      <button onClick={handleClick}>place order</button>
    </div>
  );
};
export default page;
