import React from "react";
import loginImage from "@/assets/login/log.png";
import Image from "next/image";
const register = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row">
      <div className="lg:flex-1 bg-[#000000] pt-5">
        <div className="hero min-h-screen ">
          <div className="card shrink-0 w-full max-w-sm shadow-2xl ">
            <form className="card-body p-2 md:p-4">
              <div className="mt-8">
                <h2 className=" text-xl lg:text-2xl text-white">Register</h2>
                <p className="text-sm md:text-md text-gray-400 my-2">
                  Join Us and unveield a new horizon . So why you are late? Lets
                  start
                </p>
              </div>
              <div className="form-control">
                <label className="label text-white">Your Name</label>
                <input
                  type="email"
                  placeholder="Your Name"
                  className="input input-bordered  border-b-4 border-b-[#008080]"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered  border-b-4 border-b-[#008080]"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered border-b-4 border-b-[#008080]"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">
                    Retype Your passworrd
                  </span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered border-b-4 border-b-[#008080]"
                  required
                />
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className=" h-36 flex justify-center bg-[#008080] relative lg:h-screen  lg:flex-1">
        <Image
          src={loginImage}
          className={
            "  w-10/12 left-1/2   lg:w-[600px] lg:h-[400px] z-10 top-3/4  absolute transform  -translate-x-2/3  -translate-y-1/2 lg:-translate-y-1/2 lg:top-1/2  "
          }
          alt={"login image"}
        ></Image>
      </div>
    </div>
  );
};

export default register;
