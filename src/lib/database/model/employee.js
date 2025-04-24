import mongoose from "mongoose";
const employeeModel = new mongoose.Schema({
    name: String,
    email: String,
    gender: String,
    department: String,
    position: String,
  }); 
  
  export const Employee = mongoose.models.Employee || mongoose.model("Employee", employeeModel);
  