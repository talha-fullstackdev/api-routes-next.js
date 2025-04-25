"use client"
import React, { useState, useEffect } from 'react'
const Page = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetch("http://localhost:3000/api/db-emp")
        const jsonData = await result.json()
        setData(jsonData.success)
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }
    getData()
  }, [])
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Employees</h1>
      
      {data.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-[800px] bg-white border border-gray-200 rounded-lg shadow-sm">
            <thead>
              <tr className="bg-gray-100 text-left text-sm font-semibold text-gray-700">
                <th className="py-2 px-4 border-b">Name</th>
                <th className="py-2 px-4 border-b">Email</th>
                <th className="py-2 px-4 border-b">Gender</th>
                <th className="py-2 px-4 border-b">Department</th>
                <th className="py-2 px-4 border-b">Position</th>
              </tr>
            </thead>
            <tbody>
              {data.map((emp, index) => (
                <tr key={index} className="hover:bg-gray-50 text-sm">
                  <td className="py-2 px-4 border-b">{emp.name}</td>
                  <td className="py-2 px-4 border-b">{emp.email}</td>
                  <td className="py-2 px-4 border-b">{emp.gender }</td>
                  <td className="py-2 px-4 border-b">{emp.department}</td>
                  <td className="py-2 px-4 border-b">{emp.position}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default Page
