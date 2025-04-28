import { NextResponse } from "next/server";

export const GET = async (req, res) => {
  try {

  } catch (err) {
    console.error("error", err);
    return NextResponse.json({ msg: "server side error" }, { status: 500 });
  }
};
////