"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
const page = ({ params }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [department, setDepartment] = useState("");
  const [position, setPosition] = useState("");
  // let id = params.update
  const { update: id } = React.use(params); // use this in place of above to remove some misterious error

  useEffect(() => {
    const getEmpData = async () => {
      let data = await fetch(`http://localhost:3000/api/db-emp/${id}`);
      data = await data.json();
      const { name, email, gender, department, position } = data.msg;
      setName(name);
      setEmail(email);
      setGender(gender);
      setDepartment(department);
      setPosition(position);
    };
    getEmpData();
  }, [id]);
  return (
    <div className="flex flex-col w-[400px] gap-6 m-auto mt-20">
      <h1 className="text-2xl font-semibold text-center">Update employee</h1>
      <input
        value={name}
        type="text"
        placeholder="enter your name"
        className="border-2 p-2 "
        onChange={(e) => setName(e.target.value)}
      />
      <input
        value={email}
        type="email"
        placeholder="enter your email"
        className="border-2  p-2"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        value={gender}
        type="text"
        placeholder="enter your gender"
        className="border-2 p-2"
        onChange={(e) => setGender(e.target.value)}
      />
      <input
        value={department}
        type="text"
        placeholder="enter your department"
        className="border-2 p-2"
        onChange={(e) => setDepartment(e.target.value)}
      />
      <input
        value={position}
        type="text"
        placeholder="enter your position"
        className="border-2 p-2"
        onChange={(e) => setPosition(e.target.value)}
      />
      <button className="bg-green-400 w-[80px] m-auto p-1 rounded-md hover:bg-green-300">
        add
      </button>
      <Link
        className="bg-green-400 w-[160px] text-center m-auto p-1 rounded-md hover:bg-green-300 "
        href="/getemp"
      >
        see employee data
      </Link>
    </div>
  );
};

export default page;
