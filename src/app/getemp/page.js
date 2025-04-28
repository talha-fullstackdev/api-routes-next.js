"use client"
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { LiaEdit } from "react-icons/lia";
import Delete from '../components/Delete';
import { ToastContainer } from 'react-toastify';
const Page = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    const getData = async () => {
      try {
        let  result = await fetch("http://localhost:3000/api/db-emp")
        result = await result.json()
        setData(result.success.reverse()) // reverse the array so new employee came first
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }
    getData()
  }, [])


  return (
    <>
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Employees Record</h1>
      
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
                <th colSpan={2} className="py-2 px-4 border-b">Actions</th>
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
                  <td title="edit?" className="py-2 px-4 border-b hover:text-xl hover:text-green-600"><Link href={`/getemp/${emp._id}`}><LiaEdit /></Link></td>
                  <td title="delete?" className="py-2 px-4 border-b hover:text-xl hover:text-red-600"><Link href=""><Delete id={emp._id}/></Link>     
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
            </td></tr>                
              ))}
            </tbody>
          </table>
       
        </div>
      ) : (
        <p>Loading...</p>
      )}
        
    </div>
    <Link href="/apifrontend" className="bg-green-400 w-[160px] p-1 px-2 mt-4 ml-[300px] rounded-md hover:bg-green-300">Add Employee</Link>
    <Link href="/" className="bg-green-400 w-[160px] p-1 px-2 mt-4 ml-[300px] rounded-md hover:bg-green-300">go to home</Link>
    </>
  )
}

export default Page
