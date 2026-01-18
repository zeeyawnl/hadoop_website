import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const data = await req.json();

  await fetch(
    "https://script.google.com/macros/s/AKfycbwcHJW1L2n5BddtQkxqdrICOCVil93q8P1lheYVRKQeXZ2mdroxSz_XGIAMK3JbVO8Vgg/exec",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }
  );

  return NextResponse.json({ success: true });
}
