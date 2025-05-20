import { NextResponse } from "next/server";
import { connectionString } from "@/lib/database/db_connection";
import mongoose from "mongoose";
import { Image } from "@/lib/database/model/image";
export const POST = async (req, res) => {
  try {
    await mongoose.connect(connectionString);
    const data = await req.formData();
    const file = data.get("file");
    if (!file) {
      return NextResponse.json(
        { msg: "No file found!", success: false },
        { status: 404 }
      );
    }
    const bufferData = await file.arrayBuffer();
    const buffer = Buffer.from(bufferData);
    const newImage = new Image({
      name: file.name,
      data: buffer,
      contentType: file.type,
    });
    await newImage.save();
    return NextResponse.json(
      { msg: "file uploaded succesfully🎊", success: true },
      { status: 200 }
    );
  } catch (err) {
    console.error("server side error occur", err);
    return NextResponse.json(
      { msg: "server side error!", success: false },
      { status: 500 }
    );
  }
};
