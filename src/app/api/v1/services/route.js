import { connectToDb } from '@/utils/dbConnection/dbconnect'
import allCategoriesData from '../../model/allCategoriesData'
// import  services from '/public/carData.json'
 

 connectToDb()
export async function GET(req){
  
   const result= await allCategoriesData.find({}).exec()
  return Response.json(result)


}

