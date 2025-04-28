"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { use } from "react";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
const Page = ({ params }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [department, setDepartment] = useState("");
  const [position, setPosition] = useState("");
  const router = useRouter();

  const { update: id } = use(params); // ✅ unwrap the promise

  useEffect(() => {
    const getEmpData = async () => {
      try {
        let res = await fetch(`http://localhost:3000/api/db-emp/${id}`);
        res = await res.json();
        const { name, email, gender, department, position } = res.msg;
        setName(name);
        setEmail(email);
        setGender(gender);
        setDepartment(department);
        setPosition(position);
      } catch (error) {
        console.error("Failed to fetch employee data:", error);
      }
    };
    getEmpData();
  }, [id]);

  const handleUpdateEmployee = async () => {
    try {
      const updatedEmpData = {
        name,
        email,
        gender,
        department,
        position,
      };
      if (!name || !email || !gender || !department || !position) {
        return alert("dont leave any filed empty");
      }
      let res = await fetch(`http://localhost:3000/api/db-emp/${id}`, {
        method: "PUT",
        body: JSON.stringify(updatedEmpData),
      });

      res = await res.json();

      if (res.success) {
        toast.success("Employee updated successfully!");
        setTimeout(() => {
          router.push("/getemp");
        }, 2000); // ✅ redirect after success
      } else {
        alert("Employee not updated. Please try again.");
      }
    } catch (error) {
      console.error("Error updating employee:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="flex flex-col w-[400px] gap-6 m-auto mt-20">
      <h1 className="text-2xl font-semibold text-center">Update Employee</h1>
      <input
        value={name}
        type="text"
        placeholder="Enter your name"
        className="border-2 p-2"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        value={email}
        type="email"
        placeholder="Enter your email"
        className="border-2 p-2"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        value={gender}
        type="text"
        placeholder="Enter your gender"
        className="border-2 p-2"
        onChange={(e) => setGender(e.target.value)}
      />
      <input
        value={department}
        type="text"
        placeholder="Enter your department"
        className="border-2 p-2"
        onChange={(e) => setDepartment(e.target.value)}
      />
      <input
        value={position}
        type="text"
        placeholder="Enter your position"
        className="border-2 p-2"
        onChange={(e) => setPosition(e.target.value)}
      />
      <button
        onClick={handleUpdateEmployee}
        className="bg-green-400 w-[80px] m-auto p-1 rounded-md hover:bg-green-300"
      >
        Update
      </button>
      <Link
        href="/getemp"
        className="bg-green-400 w-[160px] text-center m-auto p-1 rounded-md hover:bg-green-300"
      >
        See Employee Data
      </Link>
      <ToastContainer
        position="top-center" // ✅ Centered on top
        autoClose={2270}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default Page;
