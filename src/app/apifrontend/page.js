"use client";
import Link from "next/link";
import React, { useRef } from "react";
import { toast } from "react-toastify";
import Toast from "../components/Toast";
const page = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const genderRef = useRef();
  const departmentRef = useRef();
  const positionRef = useRef();
  const cleanInputFileds = () => {
    nameRef.current.value = "";
    emailRef.current.value = "";
    genderRef.current.value = "";
    departmentRef.current.value = "";
    positionRef.current.value = "";
  };

  const handleAdd = async () => {
    const empData = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      gender: genderRef.current.value,
      department: departmentRef.current.value,
      position: positionRef.current.value,
    };
    const { name, email, gender, department, position } = empData;
    if (!name || !email || !gender || !department || !position) {
      return toast.error("please fill all fields!");
    }
    if(name.length < 5  ){
      return toast.error("name should not less then 5 charcters")
    }
    if(!email.includes("@")){
      return toast.error("provide valid email")
    }
    try {
      let data = await fetch("http://localhost:3000/api/db-emp", {
        method: "POST",
        body: JSON.stringify(empData),
      });
      data = await data.json();
      //   console.log(data)
      if (data.success) {
        toast.success(`emloyee ${name.split(" ")[0]} added succesfully`); // here only give us first name
      } else {
        toast.error("employee not saved! try again");
      }
    } catch (err) {
      console.log("server side error occured", err);
    }
    cleanInputFileds();
  };
  return (
    <div className="flex flex-col w-[400px] gap-6 m-auto mt-20">
      <h1 className="text-2xl font-semibold text-center">Fill employee data</h1>
      <input
        ref={nameRef}
        type="text"
        placeholder="enter your name"
        className="border-2 p-2 "
      />
      <input
        ref={emailRef}
        type="email"
        placeholder="enter your email"
        className="border-2  p-2"
      />
      <input
        ref={genderRef}
        type="text"
        placeholder="enter your gender"
        className="border-2 p-2"
      />
      <input
        ref={departmentRef}
        type="text"
        placeholder="enter your department"
        className="border-2 p-2"
      />
      <input
        ref={positionRef}
        type="text"
        placeholder="enter your position"
        className="border-2 p-2"
      />
      <button
        onClick={handleAdd}
        className="bg-green-400 w-[80px] m-auto p-1 rounded-md hover:bg-green-300"
      >
        add
      </button>
      <Link className="bg-green-400 w-[160px] text-center m-auto p-1 rounded-md hover:bg-green-300 " href="/getemp">see employee data</Link>
      <Toast/>
    </div>
  );
};

export default page;
