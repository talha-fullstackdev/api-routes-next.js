"use client";
import { useParams } from "next/navigation";
const page = () => {
  const { slugs } = useParams();

  return (
    <div>
      dynamic slug page :
      {slugs.map((ele, index) => (
        <h1 key={index}>{ele}</h1>
      ))}
    </div>
  );
};

export default page;
