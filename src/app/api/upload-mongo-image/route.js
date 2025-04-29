import { NextResponse } from "next/server"

export const POST = async (req,res) =>{
    try{
        return NextResponse({msg:"hello talha from mongo db image upload",success:true},{status:200})

    }catch(err){
        console.error("error occur >>>> ",err)
        return NextResponse.json({msg:"server side error!",success : false},{status:500})
    }
}