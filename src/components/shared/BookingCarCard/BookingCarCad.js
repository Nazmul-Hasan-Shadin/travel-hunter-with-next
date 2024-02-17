import React from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import driverImg from "@/assets/driverinfo/driver.png";
import car from "@/assets/trip/car1.png";
import Image from "next/image";
const BookingCarCard = () => {
  return (
    <div className="card  px-3 bg-base-100 shadow-xl">
      <figure className="relative">
        <Image
          className="w-full"
          src={car}
          width={300}
          height={300}
          alt="driver image "
        ></Image>

        <Image
          className="absolute top-0 left-2"
          src={driverImg}
          width={100}
          height={90}
          alt="driver image "
        />
      </figure>
      <div className="bg-[#008080] ">
        <h2 className="text-white text-xl lg:text-2xl py-4 px-7 whitespace-nowrap">
          LINCOLN CLASSSIC SEDAN
        </h2>
      </div>
      <div className="card-body p-3">
        <span className="flex items-center gap-1">
          <IoMdCheckmarkCircleOutline className="text-blue-400" />{" "}
          {` 10 passenger `}
        </span>
        <span className="flex items-center gap-1">
          <IoMdCheckmarkCircleOutline className="text-blue-400" />{" "}
          {` Sealth + leather Interior `}
        </span>
        <span className="flex items-center gap-1">
          <IoMdCheckmarkCircleOutline className="text-blue-400" />{" "}
          {` Drink Include `}
        </span>
        <span className="flex items-center gap-1">
          <IoMdCheckmarkCircleOutline className="text-blue-400" />{" "}
          {` Air Condition  `}
        </span>
        <span className="flex items-center gap-1">
          <IoMdCheckmarkCircleOutline className="text-blue-400" />{" "}
          {` wifi connection `}
        </span>
        <span className="flex items-center gap-1">
          <IoMdCheckmarkCircleOutline className="text-blue-400" />{" "}
          {` Blutooth audio system `}
        </span>
        <span className="flex items-center gap-1">
          <IoMdCheckmarkCircleOutline className="text-blue-400" />{" "}
          {`Mobile phone charger`}
        </span>
      </div>
    </div>
  );
};

export default BookingCarCard;
