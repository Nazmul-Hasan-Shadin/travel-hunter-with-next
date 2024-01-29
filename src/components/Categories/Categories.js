import axios from "axios";

import "./Categories.css";
import PrimaryHeader from "../shared/PrimaryHeader/PrimaryHeader";
import CategoryTab from "../CategoryTab/CategoryTab";
import CategoriesContent from "./CategoriesContent/CategoriesContent";

const Categories = async () => {
  const data = await axios.get("http://localhost:3004/carData", {
  
  });

  const car = await data?.data?.filter((car) => car.category === "car");
  console.log(car);

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
      <CategoriesContent categoryContent={car}></CategoriesContent>
    </div>
  );
};

export default Categories;
