import mongoose from "mongoose"
import { connectionString } from "@/lib/database/db_connection"
import { Employee } from "@/lib/database/model/employee"
import { NextResponse } from "next/server" // 🔑 make sure this is imported!

export const DELETE = async (req,{ params }) => { // here we have to pass req parameter if it is in used or not
  try {
    await mongoose.connect(connectionString);
    const { empID } = params;
    const deletemp = await Employee.findByIdAndDelete(empID);
    if (!deletemp) {
      return NextResponse.json(
        { msg: "Employee not found with this ID" },
        { status: 404 }
      );
    }
    return NextResponse.json(
      { msg: "Employee deleted successfully" },
      { status: 200 }
    );
  } catch (err) {
    console.error("Server side error", err);
    return NextResponse.json(
      { msg: "Server side error" },
      { status: 500 }
    );
  }
};
