"use client";
import  { useState ,useRef} from "react";
import { toast } from "react-toastify";
import Toast from "../components/Toast";
const ImageUploadRoute = () => {
  const [file, setFile] = useState();
  const fileInputRef = useRef(null); // using ref for clearing input fileds after file has been upload
  const handleFileSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      return toast.error("kindly add file");
    }
    const data = new FormData();
    data.append("file", file);
    try {
      let result = await fetch("/api/upload-files", {
        method: "POST",
        body: data,
      });
      result = await result.json()
      if (result.success) {
         toast.success("file uploaded succesfully");
         setFile(null); 
         if (fileInputRef.current) {
           fileInputRef.current.value = ""; // Clear input field (as we cannot empty file state like we do for other values like text)
         } 
      } else {
        return toast.error("File not uploaded");
      }
    } catch (err) {
      console.error("server side error occured!",err);
      toast.error("file uploaded fail server side error");
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Upload Image
        </h1>
        <form onSubmit={handleFileSubmit} className="flex flex-col gap-4">
          <input
            ref={fileInputRef}
            onChange={(e) => setFile(e.target.files?.[0])}
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
       <Toast/>
        </form>
      </div>
    </div>
  );
};

export default ImageUploadRoute;
