
"use client"
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { LiaEdit } from "react-icons/lia"
import Delete from '../components/Delete'
import LoaderTwo from '../components/LoaderTwo'
import UseTitle from '../hooks/UseTitle'
const Page = () => {
  UseTitle("employee data")
  const [data, setData] = useState([])

  useEffect(() => {
    const getData = async () => {
      try {
        let result = await fetch("/api/db-emp")
        result = await result.json()
        setData(result.success.reverse()) // newest first
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }
    getData()
  }, [])

  return (
    <>
      <div className="min-h-screen bg-gray-50 py-10 px-4">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Employees Record</h1>

        {data.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-[900px] min-w-[600px] bg-white border border-gray-200 rounded-lg shadow-md mx-auto">
              <thead>
                <tr className="bg-gray-100 text-left text-sm font-semibold text-gray-700">
                  <th className="py-3 px-4 border-b">Name</th>
                  <th className="py-3 px-4 border-b">Email</th>
                  <th className="py-3 px-4 border-b">Gender</th>
                  <th className="py-3 px-4 border-b">Department</th>
                  <th className="py-3 px-4 border-b">Position</th>
                  <th colSpan={2} className="py-3 px-4 border-b text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {data.map((emp, index) => (
                  <tr key={index} className="hover:bg-gray-50 text-sm text-gray-800">
                    <td className="py-3 px-4 border-b font-medium">{emp.name}</td>
                    <td className="py-3 px-4 border-b">{emp.email}</td>
                    <td className="py-3 px-4 border-b capitalize">{emp.gender}</td>
                    <td className="py-3 px-4 border-b">{emp.department}</td>
                    <td className="py-3 px-4 border-b">{emp.position}</td>
                    <td className="py-3 px-4 border-b text-center text-xl text-green-600 hover:text-green-700" title="Edit">
                      <Link href={`/getemp/${emp._id}`}>
                        <LiaEdit />
                      </Link>
                    </td>
                    <td className="py-3 px-4 border-b text-center text-red-600 hover:text-red-700" title="Delete">
                      <Delete id={emp._id} name={emp.name} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <LoaderTwo/>
        )}

        <div className="mt-8 flex justify-center gap-6">
          <Link
            href="/apifrontend"
            className="bg-green-500 text-white px-4 py-2 rounded-md shadow hover:bg-green-400 transition"
          >
            Add Employee
          </Link>
          <Link
            href="/"
            className="bg-gray-600 text-white px-4 py-2 rounded-md shadow hover:bg-gray-500 transition"
          >
            Go to Home
          </Link>
        </div>
      </div>
    </>
  )
}

export default Page
