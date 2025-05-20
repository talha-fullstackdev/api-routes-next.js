"use client";
import { toast } from "react-toastify";
import Toast from "../components/Toast";
import React, { useEffect, useState, useRef } from "react";
import Loading from "../components/Loading";
import UseTitle from "../hooks/UseTitle";
const SeeMongoImages = () => {
  UseTitle("images page")
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true); // 🔄 New state
  const toastShownRef = useRef(false);
  useEffect(() => {
    const getImagesData = async () => {
      try {
        const response = await fetch(
          "/api/get-mongo-image"
        );
        const result = await response.json();

        if (result.success) {
          setImages(result.imagesData);
          if (!toastShownRef.current) {
            toast.success("Data loaded successfully");
            toastShownRef.current = true;
          }
        } else {
          console.log("error occur while fetching data from API!");
        }
      } catch (err) {
        console.log(err, "server side error!");
      } finally {
        setLoading(false);
      }
    };
    getImagesData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
        Uploaded Images
      </h1>

      {loading ? (
        <Loading/>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {images.map((image) => (
            <div
              className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center"
              key={image._id}
            >
              <img
                className="w-full h-48 object-cover rounded-md mb-4"
                src={`data:${image.contentType};base64,${Buffer.from(
                  image.data
                ).toString("base64")}`}
                alt={image.name}
              />
              <p className="text-gray-700 font-medium">{image.name}</p>
            </div>
          ))}
        </div>
      )}
      <Toast />
    </div>
  );
};

export default SeeMongoImages;
