"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import tripslider from "../../assets/trip/car1.png";
import tripslider2 from "../../assets/trip/car3.png";
import tripslider3 from "../../assets/trip/hotel.png";
import tripslider4 from "../../assets/trip/ship.png";
import { FreeMode, Pagination } from "swiper/modules";

import "./TripDeal.css";

import Image from "next/image";
import PrimaryHeader from "../shared/PrimaryHeader/PrimaryHeader";
const TreapDeal = () => {
  return (
    <div className="relative text-white py-7 bg-[#101010] partial-background">
      <div className="w-[]">
        <PrimaryHeader
          heading={"BEST TRIPS"}
          styleText={"DEALS"}
          text={
            "Ready to travel the globe? Discovering new places and  activities is simple with our flight booking service."
          }
        ></PrimaryHeader>
      </div>

      <div className="lg:p-[7.5%] ">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Image
              src={TreapDeal}
              width={200}
              height={"100%"}
              alt="trip images"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={tripslider3} alt="trip images" />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={tripslider4}
              width={200}
              height={"100%"}
              alt="trip images"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={tripslider}
              width={"100%"}
              height={"100%"}
              alt="trip images"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default TreapDeal;
