import mongoose from "mongoose";
import { connectionString } from "@/lib/database/db_connection";
import { Employee } from "@/lib/database/model/employee";
import { NextResponse } from "next/server";

export const DELETE = async (req, { params }) => {
  // here we have to pass req parameter if it is in used or not
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
    return NextResponse.json({ msg: "Server side error" }, { status: 500 });
  }
};

/////////////////////////////////////////////////////////////////////////////////////////////////
//////////////// put api for updating data
export const PUT = async (req, { params }) => {
  try {
    await mongoose.connect(connectionString);
    const body = await req.json();
    const { name, email, gender, department, position } = body;
    const { empID } = await params;
    // const id = { _id: empID }; // we can also use id like this
    let updatedEmp = await Employee.findByIdAndUpdate(
      // id
      empID,
      { name, email, gender, department, position },
      { new: true }
    );
    if (!updatedEmp) {
      return NextResponse.json(
        { msg: "No employee found with this id" },
        { status: 404 }
      );
    }
    return NextResponse.json(
      { msg: "updated succesfully", result: updatedEmp,success:true },
      { status: 200 }
    );
  } catch (err) {
    console.error("Server side error occured while updating employee data");
    return NextResponse.json({ msg: "Server side error" }, { status: 500 });
  }
};

///////////////////////////////////////////////////////////////////
////////// GET api for prefilled form data for updatiing employee data
export const GET = async (req, { params }) => {
  try {
    await mongoose.connect(connectionString);
    const { empID } = params;
    let result = await Employee.findById(empID)
    if(!result){
      return NextResponse.json({msg:"employee not found with this is"},{status:404})
    }
    return NextResponse.json({msg:result})
  } catch (err) {
    console.error("server side errro", err);
    return NextResponse.json({ msg: "server side error" }, { status: 500 });
  }
};
