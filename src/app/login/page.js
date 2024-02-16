"use client";
import { useForm } from "react-hook-form";
import Image from "next/image";
import loginImage from "@/assets/login/log.png";
import circleStyle from "./login.module.css";
import { signIn } from "next-auth/react";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitForm = async (data) => {
    try {
      const result = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex flex-col-reverse lg:flex-row ">
      <div className="lg:flex-1">
        <div
          className={`hero    min-h-screen  bg-[#000000]  relative ${circleStyle.circleBg} `}
        >
          <form
            onSubmit={handleSubmit(submitForm)}
            className="card-body  z-20 space-y-3"
          >
            <h2 className=" text-xl lg:text-2xl text-white">
              Login To Your Account
            </h2>
            <div className="form-control ">
              <label className="label ">
                <span className="label-text text-white ">Enter Your Email</span>
              </label>
              <input
                {...register("email", { required: "Email field is required" })}
                type="email"
                placeholder="email"
                className="input  input-bordered border-b-4  border-b-[#38bdf8]  text-black "
              />
              <span className="text-red-400">
                {errors?.email?.message && `${errors?.email?.message}`}
              </span>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Password</span>
              </label>
              <input
                {...register("password", {
                  required: "Passward field is required",
                })}
                type="password"
                placeholder="password"
                className="input input-bordered border-b-4  border-b-[#38bdf8] text-black "
              />
              <span className="text-red-400">
                {errors?.email?.message && `${errors?.email?.message}`}
              </span>
              <label className="label">
                <a
                  href="#"
                  className="label-text-alt link link-hover text-white"
                >
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-[#008080] focus:ring text-white hover:bg-[#008080]">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className=" h-60 lg:h-screen flex justify-center  lg:flex-1 bg-[#008080] relative">
        <Image
          className=" w-11/12  absolute top-1/4 z-10  lg:-left-28 lg:w-[600px] lg:h-[400px] "
          src={loginImage}
          alt="login image"
        ></Image>
      </div>
    </div>
  );
};

export default Login;
