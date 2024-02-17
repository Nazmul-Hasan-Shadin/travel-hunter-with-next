import Header from "@/components/Header/Header/Header";
import React from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import driverImg from "@/assets/driverinfo/driver.png";
import car from "@/assets/trip/car1.png";
import Image from "next/image";
import BookingCarCard from "@/components/shared/BookingCarCard/BookingCarCad";
const BookingDetails = () => {
  return (
    <div className="">
      <div>
        <h2 className="text-2xl py-5 px-3  md:text-5xl lg:pl-44 ">
          BOOKING <span className="text-[#008080]">DETAILS</span>
        </h2>
      </div>

      <div className="flex flex-col  lg:flex-row justify-around  md:pl-44  ">
        <BookingCarCard />

        {/* =============booking    form================== */}
        <div className="grid  grid-cols-1 lg:grid-cols-2   md:gap-x-5 px-3 ">
          <div>
            <div className="label">
              <span className="label-text text-lg">Full Name</span>
            </div>
            <label className="input input-bordered bg-[#003333]  flex items-center gap-2">
              <input
                type="text"
                className=""
                placeholder="Enter Your Full Email"
              />
            </label>
          </div>

          <div>
            <div className="label">
              <span className="label-text text-lg">Email</span>
            </div>
            <label className="input input-bordered bg-[#003333]  flex items-center gap-2">
              <input
                type="text"
                className=""
                placeholder="Enter Your Full Email"
              />
            </label>
          </div>
          <div>
            <div className="label">
              <span className="label-text text-lg">Phone</span>
            </div>
            <label className="input input-bordered bg-[#003333]  flex items-center gap-2">
              <input
                type="text"
                className="grow"
                placeholder="Enter Your PHONE"
              />
            </label>
          </div>

          <div>
            <div className="label">
              <span className="label-text text-lg">Choose Your Package</span>
            </div>
            <select className="select select-primary bg-[#003333]  w-full ">
              <option disabled selected>
                76$/2hr
              </option>
              <option>Game of Thrones</option>
              <option>Lost</option>
              <option>Breaking Bad</option>
              <option>Walking Dead</option>
            </select>
          </div>

          <div>
            <div className="label">
              <span className="label-text text-lg">Pick Up Location</span>
            </div>
            <select className="select select-primary bg-[#003333]  w-full ">
              <option disabled selected>
                Mohakhali
              </option>
              <option selected>Game of Thrones</option>
              <option>Lost</option>
              <option>Breaking Bad</option>
              <option>Walking Dead</option>
            </select>
          </div>

          <div>
            <div className="label">
              <span className="label-text text-lg">Destination</span>
            </div>
            <select className="select select-primary bg-[#003333]  w-full ">
              <option selected>Mohakhali</option>
              <option>Game of Thrones</option>
              <option>Lost</option>
              <option>Breaking Bad</option>
              <option>Walking Dead</option>
            </select>
          </div>
          <div className="col-span-1 md:col-span-2">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-5 gap-0">
              <div>
                <label className="form-control w-full  max-w-xs">
                  <div className="label">
                    <span className="label-text">PickupDate and </span>
                  </div>
                  <input
                    type="date"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs bg-[#00C9C9]"
                  />
                </label>
              </div>

              <div>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">No. Of Luggage</span>
                  </div>
                  <input
                    type="number"
                    placeholder="0"
                    className="input input-bordered w-full max-w-xs bg-[#00C9C9]"
                  />
                </label>
              </div>
              <div>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text whitespace-nowrap">
                      Drop Of Date and time
                    </span>
                  </div>
                  <input
                    type="date"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs bg-[#00C9C9]"
                  />
                </label>
              </div>
              <div>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">passenger</span>
                  </div>
                  <input
                    type="number"
                    placeholder="1"
                    className="input input-bordered w-full max-w-xs bg-[#00C9C9]"
                  />
                </label>
              </div>
            </div>
          </div>

          <div className=" col-span-1 md:col-span-2">
            <div className="label">
              <span className="label-text text-lg">Additional Note</span>
            </div>
            <textarea
              placeholder="Additional Note"
              className="textarea textarea-bordered textarea-lg w-full max-w-full bg-[#003333]"
            ></textarea>
            <div className="label">
              <span className="label-text-alt">
                {" "}
                <button className="btn bg-[#008080]  text-white">
                  Previous
                </button>{" "}
              </span>
              <span className="label-text-alt">
                {" "}
                <button className="btn bg-[#008080]  text-white">
                  Next
                </button>{" "}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingDetails;
