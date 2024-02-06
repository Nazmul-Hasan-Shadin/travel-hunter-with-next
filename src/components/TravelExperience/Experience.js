
import React from 'react';
import PrimaryHeader from '../shared/PrimaryHeader/PrimaryHeader';
import Reviews from '../Reviews/Reviews';

import Review from '../Reviews/Review/Review';
import useAxiosPublic from '@/hooks/useAxiosPublic';
import NewsLetter from '../NewsLetter/NewsLetter';

const Experience =async() => {
  const axiosPublic= useAxiosPublic()
   const reviewsData=await axiosPublic.get('/reviews')
   

  
   

    return (
        <div className='bg-[#101010] space-y-4  '>
            <PrimaryHeader heading={'TRAVELLERS'} styleText={'EXPERIENCE'} text={'Ready to travel the globe? Discovering new places and activities is simple with our flight booking service.'}></PrimaryHeader>
           

          <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-3  '>

          {
                reviewsData?.data?.message?.slice(0,3).map(review=> <Review key={review._id} review={review}></Review>)
            }

          </div>


       
     
        <NewsLetter></NewsLetter>
   


        </div>


    );
};

export default Experience;