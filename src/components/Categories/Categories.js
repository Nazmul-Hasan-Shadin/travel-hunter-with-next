import axios from "axios";

import "./Categories.css";
import PrimaryHeader from "../shared/PrimaryHeader/PrimaryHeader";
import CategoryTab from "../CategoryTab/CategoryTab";
import CategoriesContent from "./CategoriesContent/CategoriesContent";

const Categories = async () => {
  const data = await axios.get("https://travel-hunter-gray.vercel.app/api/v1/services", {
    cache:'no-store'
  });


  const selectCar =  data?.data?.find((car) => car.carData);
  const car= selectCar?.carData.filter(car=>car.category==='car')
  
  const selectHotel =  data?.data?.find((hotel) => hotel.hotelData);
  const hotel= selectHotel?.hotelData.filter(hotel=>hotel.category==='hotel')
  
 


  return (
    <div className="bg-[#101010]  partial-background-categories ">
      <PrimaryHeader
        heading={"ALL"}
        styleText={"CATEGORIES"}
        text={
          "Ready to travel the globe? Discovering new places and activities is simple with our flight booking service."
        }
      ></PrimaryHeader>

      {/* ==============categories============================= */}
      <CategoriesContent categoryContent={car} hotel={hotel} ></CategoriesContent>
    </div>
  );
};

export default Categories;
