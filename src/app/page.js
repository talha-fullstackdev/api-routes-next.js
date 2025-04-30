
import Link from 'next/link'
import React from 'react'
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const page = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4">
        <h1 className="text-3xl font-bold mb-10 text-gray-800">Home Page</h1>
        
        <div className="space-y-4">
          <Link
            href="/apifrontend"
            className="block w-64 text-center bg-green-500 text-white py-2 rounded-md shadow hover:bg-green-400 transition"
          >
            Add Employees
          </Link>

          <Link
            href="/getemp"
            className="block w-64 text-center bg-blue-500 text-white py-2 rounded-md shadow hover:bg-blue-400 transition"
          >
            See Employees
          </Link>
          <Link
            href="/upload-mongo-image-frontend"
            className="block w-64 text-center bg-indigo-500 text-white py-2 rounded-md shadow hover:bg-indigo-400 transition"
          >
            Upload Images
          </Link>
          <Link
            href="/getmongo-images"
            className="block w-64 text-center bg-purple-500 text-white py-2 rounded-md shadow hover:bg-purple-400 transition"
          >
            See Images
          </Link>

       
        </div>
      </div>

      <ToastContainer
        position="top-right"
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
    </>
  )
}

export default page
