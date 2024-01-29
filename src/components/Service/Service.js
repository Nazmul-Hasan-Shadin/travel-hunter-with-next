"use client"
import React from 'react';
import PrimaryHeader from '../shared/PrimaryHeader/PrimaryHeader';


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';


// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import Image from 'next/image';
import service from '../../assets/service/service1.png'
import service2 from '@/assets/service/service2.png'
import service3 from '@/assets/service/service3.png'

const Service = () => {
    return (
        <div className='bg-[#101010;]'>
            <PrimaryHeader heading={'Our'} styleText={'Services'} text={'Ready to travel the globe? Discovering new places and activities is simple with our flight booking service.'}></PrimaryHeader>

      {/* services slider  */}
    
     <div className='px-[8%]'>
     <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >


    <SwiperSlide>
        <Image src={service} width={300} height={300} alt='service imag'></Image>
    </SwiperSlide>
    <SwiperSlide>
        <Image src={service2} width={300} height={300} alt='service imag'></Image>
    </SwiperSlide>
    <SwiperSlide>
        <Image src={service3} width={300} height={300} alt='service imag'></Image>
    </SwiperSlide>


        </Swiper>
     </div>


        </div>
    );
};

export default Service;