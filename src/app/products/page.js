"use client";
import React from "react";
import { useRouter } from "next/navigation";
const page = () => {
  const router = useRouter();
  const handleClick = () => {
    alert("Your order has been succesfully placed!");
    // router.push("/about") // back to the provided route
    // router.back() // back to previous route location
    router.replace("/"); // home page path , we can give any path that we want ,also we can give nested path here like /profile/profileone
  };
  // const handleClick =()=>{
  //   alert("order place back to home page")
  //   router.replace("/")
  // }
  return (
    <div>
      <h1>products page</h1>
      <button className="bg-blue-400 mb-4 px-4 py-2 rounded-lg ml-4 mt-4 hover:opacity-75 hover:text-white  " onClick={handleClick}>place order</button>
    </div>
  );
};
export default page;
