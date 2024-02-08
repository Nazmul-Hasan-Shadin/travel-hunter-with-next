"use client";
import React from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "./AdvanceSearch.css";

import { MdOutlineLocationOn } from "react-icons/md";
import { usePathname } from "next/navigation";
const AdvancedSearch = ({ onclick, className }) => {
  const pathname = usePathname();

  return (
    <div
      className={` relative z-20  ${
        pathname === "/car-details" || pathname === "/driver-details"
          ? "lg:-mt-12  "
          : "lg:-mt-72"
      }    lg:mx-auto text-white  lg:p-6 background-search  lg:max-w-[860px]  lg:h-[278px] ${className} `}
    >
      <div className="grid  grid-cols-1 lg:grid-cols-3  sm:bg-for-form  relative">
        <div>
          {" "}
          <span className="w-fit ">CHOOSE CATEGORY</span>
        </div>
        <div className="">
          <Tabs className={""}>
            <div className="  -translate-y-24 lg:translate-y-0 ">
              <TabList
                className={
                  "flex w-full justify-center gap-4 lg:gap-2  mt-3 bg-[#fff] lg:w-[359px]   mb-4 text-white font-medium p-[1px]  lg:-translate-x-16  "
                }
              >
                <Tab
                  className={
                    "bg-[#008080]  px-2 lg:px-[23px] py-2 rounded-[5px]"
                  }
                >
                  {" "}
                  car
                </Tab>
                <Tab
                  className={
                    "bg-[#008080] px-4 lg:px-[23px] py-2 rounded-[5px]"
                  }
                >
                  Flight
                </Tab>
                <Tab
                  className={
                    "bg-[#008080] px-4 lg:px-[23px] py-2 rounded-[5px]"
                  }
                >
                  Hotel
                </Tab>
                <Tab
                  className={
                    "bg-[#008080] px-4 lg:px-[23px] py-2 rounded-[5px]"
                  }
                >
                  Boat
                </Tab>
              </TabList>
            </div>

            <div className="">
              <TabPanel className={"flex justify-center"}>
                <div className="w-full relative lg:absolute  left-0 p-3">
                  {/* div one */}
                  <div className=" grid grid-cols-2 gap-4 space-y-2 lg:grid-cols-3 ">
                    <div className="relative">
                      <span className="mb-4 inline-block">From</span>
                      <input
                        type="text"
                        placeholder="Your loacation"
                        className="input input-bordered w-full text-black px-10 max-w-xs "
                      />
                      <MdOutlineLocationOn className="absolute text-xl text-black top-2/4 left-4" />
                    </div>

                    <div className="relative">
                      <span className="mb-2 inline-block">To</span>
                      <input
                        type="text"
                        placeholder="Your loacation"
                        className="input  text-black  input-bordered w-full px-10 max-w-xs "
                      />
                      <MdOutlineLocationOn className="absolute text-xl text-black top-2/4 left-4" />
                    </div>

                    <div className="relative col-span-2 lg:col-span-1">
                      <span className="mb-2 inline-block">Choose Your Car</span>
                      <input
                        type="text"
                        placeholder="Your loacation"
                        className="input  text-black  input-bordered  w-full md:px-10  "
                      />
                      <MdOutlineLocationOn className="absolute text-xl text-black top-2/4 left-4" />
                    </div>
                  </div>

                  {/*======== 2nd  div========= */}

                  <div className="grid grid-cols-2 lg:grid-cols-6  gap-3">
                    <div>
                      <span className="block "> No of Luggage</span>
                      <input
                        type="text"
                        placeholder="Type here"
                        className="input  text-black  input-bordered w-full max-w-xs"
                      />
                    </div>

                    <div>
                      <span className="block "> Pick-Up Date</span>
                      <input
                        type="text"
                        placeholder="Type here"
                        className="input  text-black  input-bordered w-full max-w-xs"
                      />
                    </div>

                    <div className="">
                      <span className="block "> Passenger</span>
                      <input
                        type="text"
                        placeholder="Type here"
                        className="input  text-black  input-bordered w-full max-w-xs"
                      />
                    </div>

                    <div>
                      <span className="block "> Passenger</span>
                      <select className="select select-bordered text-black w-full max-w-xs">
                        <option disabled selected>
                          Who shot first?
                        </option>
                        <option>Han Solo</option>
                        <option>Greedo</option>
                      </select>
                    </div>

                    <div className="flex gap-2 pt-7">
                      <button
                        onClick={onclick}
                        className="btn bg-[#008080] hover:bg-green-600 btn-md z-10 px-10 py-3  text-white btn-outline"
                      >
                        Book Now
                      </button>

                      <button
                        onClick={onclick}
                        className="btn bg-[#008080] hover:bg-green-600 btn-md z-10 px-0 py-3 w-[95px]  text-white btn-outline"
                      >
                        Search Now
                      </button>
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <h2>Any content 2</h2>
              </TabPanel>

              <TabPanel>
                <h2>Any content 1</h2>
              </TabPanel>
              <TabPanel>
                <h2>Any content 2</h2>
              </TabPanel>
            </div>
          </Tabs>
        </div>
        {/*  raido butoon */}
        <div className="flex flex-col gap-1   pl-12 lg:flex-row  ">
          <div className="form-control">
            <label className="label  cursor-pointer">
              <span className="label-text  text-white">One way</span>
              <input
                type="radio"
                name="radio-10"
                className="radio checked:bg-red-500"
                checked
              />
            </label>
          </div>

          <div className="form-control ">
            <label className="label cursor-pointer">
              <span className="label-text text-white">Round Tip</span>
              <input
                type="radio"
                name="radio-10"
                className="radio checked:bg-red-500"
                checked
              />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedSearch;
