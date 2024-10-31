"use client";
import { useParams } from "next/navigation";

import React from "react";

const page = () => {
  const params = useParams();
  return <div>product page of id :{params.productsid}</div>;
};
export default page;

