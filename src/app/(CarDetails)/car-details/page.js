import CarDetailCard from "@/components/CarDetail/CarDetailCard";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import React from "react";

const CarDetails = async ({ cardetail }) => {
  const axiosPublic = useAxiosPublic();

  const res = await axiosPublic.get("/categories-data", {
    cache: "no-store",
  });

  const carData = res?.data?.message[0]?.carData;

  return (
    <div className="bg-[#000000]">
      <div className="w-9/12  -z-10  mx-auto mt-12 mb-24">
        <h1 className="text-5xl text-white pb-[107px]">
          Our Car <span className="text-[#00C9C9]"> Feets</span>{" "}
        </h1>

        <div className="grid  gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {carData.slice(0, 4).map((cardetail) => (
            <CarDetailCard
              key={cardetail._id}
              cardetail={cardetail}
            ></CarDetailCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
