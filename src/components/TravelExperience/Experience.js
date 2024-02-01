import React from 'react';
import PrimaryHeader from '../shared/PrimaryHeader/PrimaryHeader';
import Reviews from '../Reviews/Reviews';
import axios from 'axios';
import Review from '../Reviews/Review/Review';

const Experience =async() => {
 
   const reviewsData= await fetch('http://localhost:3000/api/v1/reviews')
   const reviews=  await reviewsData.json()
  
     console.log(reviews);

    return (
        <div className='bg-[#101010]'>
            <PrimaryHeader heading={'TRAVELLERS'} styleText={'EXPERIENCE'} text={'Ready to travel the globe? Discovering new places and activities is simple with our flight booking service.'}></PrimaryHeader>
           

          <div className='flex '>

          {
                reviews.map(review=> <Review key={review._id}></Review>)
            }

          </div>


        </div>


    );
};

export default Experience;