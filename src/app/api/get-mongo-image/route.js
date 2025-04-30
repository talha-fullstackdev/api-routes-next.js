import { NextResponse } from "next/server"
import { connectionString } from "@/lib/database/db_connection"
import { Image } from "@/lib/database/model/image"
import mongoose from "mongoose"
export const GET = async(req,res)=>{
    try{
        await mongoose.connect(connectionString)
        let data = await Image.find().select("name data contentType")
      

        return NextResponse.json({msg:"api connected succesfully",success:true,imagesData:data})

    }catch(err){
        console.error(err,"server side error")
        return NextResponse.json({msg:"failed to get data , server side error",success:false},{status:500})
    }
}