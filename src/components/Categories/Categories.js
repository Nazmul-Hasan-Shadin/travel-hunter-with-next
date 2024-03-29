import "./Categories.css";
import PrimaryHeader from "../shared/PrimaryHeader/PrimaryHeader";
// import CategoryTab from "../CategoryTab/CategoryTab";
import CategoriesContent from "./CategoriesContent/CategoriesContent";
import useAxiosPublic from "@/hooks/useAxiosPublic";
// import useAxiosPublic from "@/hooks/useAxiosPublic";

const Categories = async () => {
  const axiosPublic = useAxiosPublic();
  const data = await axiosPublic.get(`/categories-data`, {
    cache: "no-store",
  });
  console.log(data);

  const selectCar = data?.data?.message?.find((car) => car.carData);
  console.log(selectCar);
  const car = selectCar?.carData.filter((car) => car.category === "car");

  const selectHotel = data?.data?.message?.find((hotel) => hotel.hotelData);
  const hotel = selectHotel?.hotelData.filter(
    (hotel) => hotel.category === "hotel"
  );

  // ===============for next js monos server===============
  // const car = data?.data[0]?.carData;

  // const hotel = data?.data[0]?.hotelData;
  // console.log(hotel);
  return (
    <div className="bg-[#101010] py-7 partial-background-categories ">
      <PrimaryHeader
        heading={"ALL"}
        styleText={"CATEGORIES"}
        text={
          "Ready to travel the globe? Discovering new places and activities is simple with our flight booking service."
        }
      ></PrimaryHeader>

      {/* ==============categories============================= */}
      <CategoriesContent
        categoryContent={car}
        hotel={hotel}
      ></CategoriesContent>
    </div>
  );
};

export default Categories;
