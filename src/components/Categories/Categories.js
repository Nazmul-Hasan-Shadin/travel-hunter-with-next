import axios from "axios";

import "./Categories.css";
import PrimaryHeader from "../shared/PrimaryHeader/PrimaryHeader";
import CategoryTab from "../CategoryTab/CategoryTab";
import CategoriesContent from "./CategoriesContent/CategoriesContent";

const Categories = async () => {
  const data = await axios.get("https://travel-hunter-server.vercel.app/categories-data", {
    cache:'no-store'
  });
  console.log(data.data.message);

  const selectCar =  data?.data?.message.find((car) => car.carData);
  const car= selectCar?.carData.filter(car=>car.category==='car')
  
  const selectHotel =  data?.data?.message.find((hotel) => hotel.hotelData);
  const hotel= selectHotel?.hotelData.filter(hotel=>hotel.category==='hotel')
  
 console.log(hotel);


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
