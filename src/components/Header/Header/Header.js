"use client";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";

import Navbar from "@/components/Header/Navbar/Navbar";

import AdvancedSearch from "../AdvancedSearch/AdvanchedSearch";

import Image from "next/image";
import HeaderText from "../HeaderText/HeaderText";
import AirplaneBanner from "@/assets/Banner/airplaneBanner.png";
import car from "../../../assets/Banner/carBanner.png";
import hotel from "../../../assets/Banner/hotelBanner.png";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div className="">
      <div className=" ">
        <Navbar></Navbar>
        <Swiper
          direction={"vertical"}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          className={`mySwiper h-[40vh] lg:h-[100vh] ${
            pathname === "/car-details" ||
            pathname === "/booking-details" ||
            pathname === "/driver-details" ||
            pathname === "/booking-checkout"
              ? "lg:h-[28vh]"
              : ""
          } -mt-16`}
        >
          {
            <SwiperSlide>
              <div>
                <Image
                  className={`bg-no-repeat h-[40vh] bg-contain bg-center  w-full -z-10 ${
                    pathname === "/car-details" ||
                    pathname === "/booking-details" ||
                    pathname === "/driver-details" ||
                    pathname === "/booking-checkout"
                      ? "lg:h-[28vh] bg-contain  "
                      : " lg:h-[97vh]"
                  } `}
                  height={600}
                  alt="jf"
                  src={car}
                />

                {pathname.startsWith("/car-details") ||
                pathname.startsWith("/booking-details") ||
                pathname.startsWith("/driver-details") ||
                pathname === "/booking-checkout" ? (
                  ""
                ) : (
                  <HeaderText className="hidden lg:block"></HeaderText>
                )}
              </div>
            </SwiperSlide>
          }
          {pathname === "/" && (
            <SwiperSlide>
              <div>
                <Image
                  className={`bg-no-repeat h-[40vh] bg-contain bg-center lg:h-[97vh]  w-full -z-10  `}
                  height={600}
                  alt="jf"
                  src={AirplaneBanner}
                />

                <HeaderText className="hidden lg:block"></HeaderText>
              </div>
            </SwiperSlide>
          )}
          {pathname === "/" && (
            <SwiperSlide>
              <div>
                <Image
                  className="bg-no-repeat h-[40vh] bg-contain bg-center lg:h-[97vh]  w-full -z-10"
                  height={600}
                  alt="jf"
                  src={hotel}
                />

                <HeaderText className="hidden lg:block"></HeaderText>
              </div>
            </SwiperSlide>
          )}
        </Swiper>
        <AdvancedSearch className="hidden fixed lg:block"></AdvancedSearch>
      </div>
      <HeaderText className="block lg:hidden"></HeaderText>
      <AdvancedSearch className="block md:hidden"></AdvancedSearch>
    </div>
  );
};

export default Header;
