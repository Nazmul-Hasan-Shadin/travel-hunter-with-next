import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiCircleCheck } from "react-icons/ci";

const CarDetailCard = ({ cardetail }) => {
  const {
    image,
    passenger_number,
    bags_number,
    star,
    description,
    car_name,
    wifi,
    mobile_charger,
    bluetooth,
    drink_include,
    price,
    category,
  } = cardetail;

  return (
    <div className="card card-compact  text-white  bg-[#000000] shadow-xl">
      <figure>
        <Image
          className="w-full"
          src={image}
          width={300}
          height={364}
          alt="car image "
        ></Image>
      </figure>
      <h1 className="bg-[#008080] py-2 text-2xl px-16">{car_name}</h1>
      <div className="card-body">
        <p className="flex gap-2 items-center">
          <CiCircleCheck /> {passenger_number} passenger
        </p>
        <p className="flex gap-2 items-center">
          <CiCircleCheck /> Satin + leather Interior
        </p>
        <p className="flex gap-2 items-center">
          <CiCircleCheck /> Drinks included
        </p>
        <p className="flex gap-2 items-center">
          <CiCircleCheck /> Air conditioned and heated
        </p>
        <p className="flex gap-2 items-center">
          <CiCircleCheck /> {wifi ? "Wifi connection" : "wifi not available"}
        </p>
        <p className="flex gap-2 items-center">
          <CiCircleCheck />{" "}
          {bluetooth ? "Blutooth audio available" : "Blutooth not available"}
        </p>
        <p className="flex gap-2 items-center">
          <CiCircleCheck />{" "}
          {mobile_charger ? "Mobile charger available" : "Not available"}
        </p>

        <div className="card-actions gap-0  text-white text-center">
          <p className="bg-[#11374F] p-4 text-xl flex-1">
            {" "}
            {price} <span className="text-[#008080] text-sm">/hr </span>
          </p>
          <Link href={"/"}>
            <p className="bg-[#008080] p-4 text-xl flex-1"> Book Now </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CarDetailCard;
