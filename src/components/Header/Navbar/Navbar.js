"use client";
import { IoIosSearch } from "react-icons/io";
import { FaEarthAsia } from "react-icons/fa6";
import { MdKeyboardArrowDown } from "react-icons/md";

import Link from "next/link";
import Image from "next/image";
import PrimaryButton from "../../shared/PrimaryButton/PrimaryButton";
import "./Navbar.css";
const Navbar = () => {
  const links = (
    <>
      <li>
        {" "}
        <Link href={"/"}>Home</Link>{" "}
      </li>
      <li>
        {" "}
        <Link href={""}>
          services <MdKeyboardArrowDown />{" "}
        </Link>{" "}
      </li>
      <li>
        {" "}
        <Link href={""}>My Bookings</Link>{" "}
      </li>
      <li>
        {" "}
        <Link href={""}>package & offer</Link>{" "}
      </li>
      <li>
        {" "}
        <Link href={""}>Blog</Link>{" "}
      </li>
      <li>
        {" "}
        <Link href={""}>About us</Link>{" "}
      </li>
      <li>
        {" "}
        <Link href={""}>More</Link>{" "}
      </li>
    </>
  );
  return (
    <div className="relative  mx-auto w-[86%]">
      <div className="navbar  background-nav text-white ">
        <div className="absolute hidden  top-0 inset-0    ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1682"
            height="98"
            viewBox="0 0 1682 98"
            fill="none"
          >
            <g opacity="0.97" filter="url(#filter0_bdddddddd_100_899)">
              <path
                d="M11 27C11 15.9543 19.9543 7 31 7H1651C1662.05 7 1671 15.9543 1671 27V63C1671 74.0457 1662.05 83 1651 83H31C19.9543 83 11 74.0457 11 63V27Z"
                fill="url(#paint0_linear_100_899)"
                fillOpacity="0.7"
                shape-rendering="crispEdges"
              />
              <path
                d="M11 27C11 15.9543 19.9543 7 31 7H1651C1662.05 7 1671 15.9543 1671 27V63C1671 74.0457 1662.05 83 1651 83H31C19.9543 83 11 74.0457 11 63V27Z"
                fill="black"
                fillOpacity="0.2"
                shape-rendering="crispEdges"
              />
              <path
                d="M12 27C12 16.5066 20.5066 8 31 8H1651C1661.49 8 1670 16.5066 1670 27V63C1670 73.4934 1661.49 82 1651 82H31C20.5066 82 12 73.4934 12 63V27Z"
                stroke="white"
                stroke-width="2"
                shape-rendering="crispEdges"
              />
            </g>
            <defs>
              <filter
                id="filter0_bdddddddd_100_899"
                x="0"
                y="0"
                width="1682"
                height="98"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_100_899"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="5.5" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.49 0"
                />
                <feBlend
                  mode="normal"
                  in2="effect1_backgroundBlur_100_899"
                  result="effect2_dropShadow_100_899"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="effect2_dropShadow_100_899"
                  result="effect3_dropShadow_100_899"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="effect3_dropShadow_100_899"
                  result="effect4_dropShadow_100_899"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="effect4_dropShadow_100_899"
                  result="effect5_dropShadow_100_899"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="effect5_dropShadow_100_899"
                  result="effect6_dropShadow_100_899"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="effect6_dropShadow_100_899"
                  result="effect7_dropShadow_100_899"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="effect7_dropShadow_100_899"
                  result="effect8_dropShadow_100_899"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="effect8_dropShadow_100_899"
                  result="effect9_dropShadow_100_899"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect9_dropShadow_100_899"
                  result="shape"
                />
              </filter>
              <linearGradient
                id="paint0_linear_100_899"
                x1="841"
                y1="7"
                x2="841"
                y2="83"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#008080" />
                <stop offset="1" stop-color="#008080" stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="navbar-start  ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu text-black menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">
            <Image
              src={"/logo.png"}
              width={100}
              height={80}
              alt="logo image"
            ></Image>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu pr-7  menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end hidden space-x-3  ">
          <IoIosSearch className="text-3xl text-white" />
          <FaEarthAsia className="text-3xl" />
          <button className="btn btn-outline z-10  text-white ">Sign Up</button>
          <PrimaryButton text={"Log In"}></PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
