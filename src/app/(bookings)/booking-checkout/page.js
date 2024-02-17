import BookingCarCard from "@/components/shared/BookingCarCard/BookingCarCad";
import React from "react";

const BookingCheckOut = () => {
  return (
    <div className="pl-44">
      <h2 className=" text-2xl md:text-3xl py-5">
        BOOKING <span className="bg-[#008080]">CHECKOUT</span>
      </h2>
      <div className="flex flex-col  w-full lg:flex-row justify-around">
        <div>
          <BookingCarCard></BookingCarCard>
        </div>

        <div className="flex flex-col gap-4">
          <div>
            <h2>Inside City -One way</h2>
            <p>this is address place</p>
          </div>

          <div className="divider"></div>

          <div className="flex px-4  py-12 gap-24 bg-[#008080] w-full">
            <div className="">
              <h2 className="text-2xl ">Travel Date</h2>
              <p>Travel Date Here</p>
            </div>
            <div>
              <h2 className="text-2xl">PickUp Time</h2>
              <p>Pickup time here</p>
            </div>
            <div>
              <h2 className="text-2xl">Car Type</h2>
              <p>Car type here </p>
            </div>
          </div>

          <div className="bg-[#008080] py-12 flex justify-around">
            <h2 className="text-2xl">Promo Code</h2>
            <h2> Add New Promo code here</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingCheckOut;
