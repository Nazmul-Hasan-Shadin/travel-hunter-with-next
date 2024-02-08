import driver from "@/assets/driverinfo/driver.png";

import Image from "next/image";
import { FaStar } from "react-icons/fa6";
const DriverDetails = () => {
  return (
    <div className=" bg-[#000000]">
      <div className=" md:w-9/12 mx-auto text-white bg-[#084848]">
        <h3 className="text-3xl">
          Driver <span className="text-[#008080]">Profile</span>
        </h3>
        {/* dricve details */}
        <div className="flex  items-center justify-between ">
          <div className="flex gap-2 lg:gap-6 items-center">
            <div>
              <Image
                className=" w-80 h-36 md:h-full"
                src={driver}
                alt="driver image"
              ></Image>
            </div>
            <div className="">
              <h2 className="text-3xl lg:text-5xl pt-2">MS XXX</h2>
              <p className="text-xl lg:text-3xl ">TOYTA DRIVER </p>
              <span className=" flex p-2 lg:pt-8  gap-2 pb-3">
                <FaStar></FaStar>
                <FaStar></FaStar>
                <FaStar></FaStar>
                <FaStar></FaStar>
                <FaStar></FaStar>
              </span>
              <button className="bg-[#008080] text-white btn btn-sm md:btn-md ">
                {" "}
                Book Now
              </button>
            </div>
          </div>
          <div className="hidden md:block">
            <Image
              className=""
              src={"https://i.ibb.co/J2PJcqp/cart4.png"}
              width={300}
              height={300}
              alt="image of car"
            ></Image>
          </div>
        </div>
        {/*============ driver details============ */}
        <div>
          <h3 className="text-3xl ">
            Driver <span className="text-[#008080]">Details</span>
          </h3>
          <div>
            <div className="flex justify-end gap-2">
              <div className="bg-[#00000033]">
                <select className="select select-ghost w-full max-w-xs">
                  <option disabled selected>
                    Outside City
                  </option>
                  <option>Svelte</option>
                  <option>Vue</option>
                  <option>React</option>
                </select>
              </div>
              <div>
                <select className="select select-ghost w-full max-w-xs">
                  <option disabled selected>
                    Select another driver
                  </option>
                  <option>Svelte</option>
                  <option>Vue</option>
                  <option>React</option>
                </select>
              </div>
            </div>

            {/* ==================details form================ */}

            <div className="flex flex-col  gap-4">
              <div className="bg-[#003333]  p-3 pb-2 md:pb-0 flex  flex-col md:flex-row md:items-center">
                <label htmlFor="phone" className="text-start mr-16 w-28">
                  Driver Phone Number
                </label>
                <input
                  type="number"
                  id="phone"
                  placeholder="+88 017-xxxxx-xxx"
                  className="input input-bordered w-full max-w-md"
                />
              </div>
              <div className="bg-[#003333]  p-3 pb-2 md:pb-0  flex flex-col md:flex-row md:items-center">
                <label className="text-start mr-16 w-28" htmlFor="lincess">
                  Driver Lincess
                </label>
                <input
                  id="lincess"
                  type="text"
                  placeholder="Lincesses"
                  className="input  input-bordered w-full max-w-md"
                />
              </div>
              <div className="bg-[#003333]  p-3 pb-2 md:pb-0  flex  flex-col md:flex-row md:items-center">
                <label
                  className="text-start mr-16 w-28"
                  htmlFor="professionalizm"
                >
                  Professionalism
                </label>
                <textarea
                  id="professionalizm"
                  placeholder="Bio"
                  class="textarea textarea-bordered textarea-sm w-full max-w-md"
                ></textarea>
              </div>
              <div className="bg-[#003333]  p-3 pb-2 md:pb-0 flex  flex-col md:flex-row  md:items-center ">
                <label className="text-start mr-16 w-28" htmlFor="experience">
                  Experience
                </label>
                <input
                  id="experience"
                  type="number"
                  placeholder="5 Year"
                  className="input input-bordered w-full max-w-md"
                />
              </div>
              <div className="bg-[#003333]  p-3 pb-2 md:pb-0 flex  flex-col md:flex-row md:items-center">
                <label className="text-start mr-16 w-28" htmlFor="">
                  Professionalism
                </label>
                <textarea
                  placeholder="Bio"
                  class="textarea textarea-bordered textarea-sm w-full max-w-md"
                ></textarea>
              </div>
              <div className="bg-[#003333]  p-3 pb-2 md:pb-0  flex-col md:flex-row items-center">
                <label className="text-start mr-16 w-28" htmlFor="">
                  Professionalism
                </label>
                <textarea
                  placeholder="Bio"
                  class="textarea textarea-bordered textarea-sm w-full max-w-md"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DriverDetails;
