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
export const POST = async (req, res) => {
  await mongoose.connect(connectionString);
  const body = await req.json();
  const { name, email, gender, department, position } = body;
  const data = new Employee({
    name,
    email,
    gender,
    department,
    position,
  });
  const employee = await data.save();
  return NextResponse.json(
    { msg: "employee save succesfulli", newEmp: employee },
    { status: 200 }
  );
};
export const DELETE = async({params})=>{
  try{
    await mongoose.connect(connectionString)
    const {empID} =params
    const deletemp = await Employee.findByIdAndDelete(empID)
    if(!deletemp){
      return NextResponse.json({msg:"employee not found with this id"},{status:404})
    }
    NextResponse.json({msg:"employee deleted Succesfully"},{status:200}) 

  }catch(err){
    console.error("server side error",err)
    NextResponse.json({msg:"server side errror"},{status:500})
  }
}