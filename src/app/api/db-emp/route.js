import { connectionString } from "@/lib/database/db_connection";
import mongoose from "mongoose";
import { Employee } from "@/lib/database/model/employee";
import { NextResponse } from "next/server";
export const GET = async () => {
  await mongoose.connect(connectionString);
  const data = await Employee.find();

  return NextResponse.json({
    success: data,
  });
};
