import BookingCarCard from "@/components/shared/BookingCarCard/BookingCarCad";
import React from "react";

const BookingCheckOut = () => {
  return (
    <div className=" px-3 lg:pl-44">
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

          <div className="flex lg:px-4  py-12 gap-6 lg:gap-24 bg-[#008080] w-full">
            <div className="">
              <h2 className="font-medium whitespace-nowrap lg:text-2xl  ">
                Travel Date
              </h2>
              <p className=" text-xs md:text-lg">Travel Date Here</p>
            </div>
            <div>
              <h2 className="font-medium lg:text-2xl whitespace-nowrap">
                PickUp Time
              </h2>
              <p className="text-xs md:text-lg">Pickup time here</p>
            </div>
            <div>
              <h2 className="font-medium lg:text-2xl whitespace-nowrap">
                Car Type
              </h2>
              <p className="text-xs md:text-lg">Car type here </p>
            </div>
          </div>

          <div className="bg-[#008080] py-12 flex justify-around">
            <h2 className="text-2xl">Promo Code</h2>
            <h2> Add New Promo code here</h2>
          </div>

          <div>
            <h2 className="pl-2">Payment Info</h2>
            <div className="bg-[#003333] lg:p-12">
              <h2 className="text-2xl py-2">Payment Method</h2>
              <ul className="pl-2">
                <li className="flex items-center gap-3">
                  <input className="rounded-full" type="checkbox" />
                  <span> Cash on delivary</span>
                </li>
                <li className="flex items-center gap-3">
                  <input className="rounded-full" type="checkbox" />
                  <span> pay with bkash</span>
                </li>
                <li className="flex items-center gap-3">
                  <input className="rounded-full" type="checkbox" />
                  <span> pay with credit card</span>
                </li>
              </ul>

              <div className="grid  grid-cols-1 md:grid-cols-2 lg:gap-8 pl-12">
                <div>
                  <label className="form-control w-full">
                    <div className="label">
                      <span className="label-text">Card Number</span>
                    </div>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="input input-bordered w-full bg-[#e0e0e0] max-w-xs"
                    />
                  </label>
                </div>

                <div>
                  <label className="form-control w-full max-w-xs">
                    <div className="label">
                      <span className="label-text">Holder Name</span>
                    </div>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="input input-bordered w-full max-w-xs bg-[#e0e0e0] "
                    />
                  </label>
                </div>
                <div>
                  <label className="form-control w-full max-w-xs">
                    <div className="label">
                      <span className="label-text">Expiration</span>
                    </div>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="input input-bordered w-full max-w-xs bg-[#e0e0e0] "
                    />
                  </label>
                </div>
                <div>
                  <label className="form-control w-full max-w-xs">
                    <div className="label">
                      <span className="label-text">Cvv</span>
                    </div>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="input input-bordered w-full max-w-xs bg-[#e0e0e0] "
                    />
                  </label>
                </div>
              </div>
            </div>

            <div className="text-2xl mt-4 px-10 flex justify-between bg-[#003333] py-12 ">
              <h2 className=" text-xl md:text-lg">Trip Balanced</h2>
              <p>$7,000</p>
            </div>
            <div className="label">
              <span className="label-text-alt">
                {" "}
                <button className="btn bg-[#008080]">Previous</button>{" "}
              </span>
              <span className="label-text-alt">
                <button className="btn bg-[#008080]">Proceed</button>{" "}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingCheckOut;
