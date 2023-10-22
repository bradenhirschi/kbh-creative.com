import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({ message: "The API is running" });
};
