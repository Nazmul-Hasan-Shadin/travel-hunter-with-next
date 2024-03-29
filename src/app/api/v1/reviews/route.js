import reviewModel from "@/app/model/reviewModel";
import { NextResponse } from "next/server";

export async function POST(req) {
  const reviewInfo = await req.json();

  console.log(req);
  if (req.method === "POST") {
    console.log(reviewInfo);

    console.log(reviewInfo);

    const postReview = await reviewModel.create(reviewInfo);

    return NextResponse.json({
      message: "User created successfully",
      sucess: true,
      postReview,
    });
  }
}

export async function GET(req, res) {
  try {
    if (req.method === "GET") {
      const result = await reviewModel.find({}).exec();
      return Response.json(result);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
