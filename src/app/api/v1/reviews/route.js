import { connectToDb } from "@/app/dbConnection/dbconnect"

import { NextResponse } from "next/server";
import { reviewModel } from '../../../model/reviewModel'; // Adjust the path based on the actual location



export async function POST(req){
   await connectToDb()

    const reviewInfo=await req.json()
    console.log(reviewInfo);

    console.log(reviewInfo);
 
    const postReview=  await reviewModel.create(reviewInfo)

    return NextResponse.json({
      message: "User created successfully",
      sucess: true,
      postReview
  })
}

export async function GET(req,res) {
  
 try {
  await connectToDb();
  const result = await reviewModel.find({}).exec();
  return NextResponse.json(result);
 } catch (error) {
   console.log(error);
   res.status(500).json({ error: 'Internal Server Error' }); 
 }
}
