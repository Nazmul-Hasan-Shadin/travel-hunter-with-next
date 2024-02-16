import allCategoriesData from "../../../model/dataHubModel";
// import  services from '/public/carData.json'

export async function GET(_req) {
  try {
    const result = await allCategoriesData.find({}).lean().exec();
    return Response.json(result);
  } catch (error) {
    console.error("Error fetching data:", error);
    return Response.status(500).json({ error: "Internal Server Error" });
  }
}
