import { connectToDb } from '@/app/dbConnection/dbconnect'
import allCategoriesData from '../../../model/allCategoriesData'
// import  services from '/public/carData.json'
 


export async function GET(req){
  connectToDb()
   const result= await allCategoriesData.find({}).exec()
  return Response.json(result)


}

