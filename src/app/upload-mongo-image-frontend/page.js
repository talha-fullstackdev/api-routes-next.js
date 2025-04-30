"use client";
import React, { useRef, useState } from "react";
import Toast from "../components/Toast";
import { toast } from "react-toastify";

const UploadMongoImage = () => {
  const [file, setFile] = useState("");
  const fileRef = useRef();
  const handleRemove = () => {
    /// remove file from input field
    setFile("");
    if (fileRef.current) {
      fileRef.current.value = "";
    }
  };
  const handleFileSubmit = async (e) => {
    e.preventDefault();
    if (!file) return toast.error("Please select a file");
    const data = new FormData();
    data.append("file", file);
    try {
      let result = await fetch("http://localhost:3000/api/upload-mongo-image", {
        method: "POST",
        body: data,
      });
      result = await result.json();
      if (result.success) {
        handleRemove();
        const { name } = file;
        return toast.success(`succesfully uploaded ${name}`);
      } else {
        return toast.error("File uploading failed");
      }
    } catch (err) {
      console.error("Server side error", err);
      toast.error("File uploading failed! Server side error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={handleFileSubmit}
        className="bg-white p-6 rounded-xl shadow-md w-full max-w-md space-y-4"
      >
        <h2 className="text-2xl font-semibold text-center text-gray-800">
          Upload Image
        </h2>

        <input
          onChange={(e) => setFile(e.target.files?.[0])}
          ref={fileRef}
          type="file"
          name="file"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
        />
        {file && (
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-600 truncate max-w-[70%]">
              {typeof file === "string" ? file : file.name}
            </p>
            <button
              type="button"
              onClick={handleRemove}
              className="text-sm text-red-600 hover:underline"
            >
              Remove
            </button>
          </div>
        )}
        <button
          type="submit"
          className="w-full py-2 px-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition"
        >
          Upload
        </button>

        <Toast />
      </form>
    </div>
  );
};

export default UploadMongoImage;
//////////