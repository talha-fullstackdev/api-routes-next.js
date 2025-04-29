import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
export const POST = async (req, res) => {
  const data = await req.formData();
  const file = data.get("file");
  if (!file) {
    return NextResponse.json(
      { success: "false", msg: "No file found!" },
      { status: 404 }
    );
  }
  const bufferData = await file.arrayBuffer();
  const buffer = Buffer.from(bufferData);
  const path = `./public/uploads/${file.name}`;
  try {
    await writeFile(path, buffer);
    return NextResponse.json(
      { msg: "file uploaded sucesfully", success: true },
      { status: 200 }
    );
  } catch (err) {
    console.error("error", err);
    return NextResponse.json({ msg: "server side error" }, { status: 500 });
  }
};
//