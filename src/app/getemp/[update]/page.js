"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { use } from "react";
import { toast } from "react-toastify";
import Toast from "@/app/components/Toast";

const UpdateEmployeePage = ({ params }) => {
  const [originalData, setOriginalData] = useState({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [department, setDepartment] = useState("");
  const [position, setPosition] = useState("");

  const router = useRouter();
  const { update: id } = use(params); // Assuming dynamic route param

  useEffect(() => {
    const getEmpData = async () => {
      try {
        let res = await fetch(`/api/db-emp/${id}`);
        res = await res.json();
        const { name, email, gender, department, position } = res.msg;
        setName(name);
        setEmail(email);
        setGender(gender);
        setDepartment(department);
        setPosition(position);
        setOriginalData({ name, email, gender, department, position });
      } catch (error) {
        console.error("Failed to fetch employee data:", error);
      }
    };
    getEmpData();
  }, [id]);

  const handleUpdateEmployee = async () => {
    try {
      const updatedEmpData = { name, email, gender, department, position };
      const isChanged = Object.keys(updatedEmpData).some(
        (key) => updatedEmpData[key] !== originalData[key]
      );
      if (!isChanged) {
        return toast.error(
          "Please update at least one field to update record."
        );
      }

      if (!name || !email || !gender || !department || !position) {
        return toast.error("Please fill all fields!");
      }
      let res = await fetch(`/api/db-emp/${id}`, {
        method: "PUT",
        body: JSON.stringify(updatedEmpData),
      });
      res = await res.json();

      if (res.success) {
        toast.success("Employee updated successfully!");
        setTimeout(() => {
          router.push("/getemp");
        }, 2000);
      } else {
        toast.error("Update failed. Try again.");
      }
    } catch (error) {
      console.error("Error updating employee:", error);
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-md p-8 space-y-6">
        <h1 className="text-3xl font-bold text-center text-gray-800">
          Update Employee
        </h1>

        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Enter your name"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          autoFocus
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Enter your email"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <input
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          type="text"
          placeholder="Enter your gender"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <input
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          type="text"
          placeholder="Enter your department"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <input
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          type="text"
          placeholder="Enter your position"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
        />

        <button
          onClick={handleUpdateEmployee}
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg transition duration-200"
        >
          Update
        </button>

        <Link
          href="/getemp"
          className="block text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-200"
        >
          See Employee Data
        </Link>

        <Toast />
      </div>
    </div>
  );
};

export default UpdateEmployeePage;
