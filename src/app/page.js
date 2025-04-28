import Link from 'next/link'
import React from 'react'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const page = () => {
  return (
    <>
    <h1 className="mb-10 ">home page</h1>
    <Link className=" bg-green-400 px-2 py-1 ml-10 hover:bg-green-300" href="apifrontend">Add employees</Link> <br /><br />
    <Link href="getemp" className="bg-green-400 px-2 py-1 ml-10 hover:bg-green-300">see employes</Link>
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