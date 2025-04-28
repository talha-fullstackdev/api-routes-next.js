"use client"
import react, { useState } from "react";
const ImageUploadRoute = () => {
    
    const [file,setFile]=useState()
    const handleFileSubmit=(e)=>{
        // if(!file){
        //     return alert("kindly add file")
        // }
        e.preventDefault()
        console.log(file)
    }
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
        <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
          <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Upload Image
          </h1>
          <form onSubmit={handleFileSubmit} className="flex flex-col gap-4">
            <input 
              onChange={(e)=>setFile(e.target.value)}
              type="file" 
              name="file" 
              className="block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 cursor-pointer"
            />
            <button 
              type="submit" 
              className="bg-green-400 hover:bg-green-300 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
            >
              Add
            </button>
          </form>
        </div>
      </div>
    );
  }
  
  export default ImageUploadRoute;
  