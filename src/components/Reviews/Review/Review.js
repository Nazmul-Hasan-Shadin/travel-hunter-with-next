
import Image from 'next/image';
import React from 'react';
import { FaStar } from 'react-icons/fa6';
import image from '@/assets/review/Avatar.png'


const Review = ({review}) => {
  console.log(review);
  const {imaged ,description,star,name,title}= review;
  console.log(image,'image');
    return (
        <div className='' >
        <div className='text-[#767E86] space-y-2 bg-white p-5 rounded-[8px]' > 
      <figure className='-translate-y-20'>
     
     <Image  src={image} width={100} height={100} alt="client image" />

      </figure>
        <p>
    
    {description}
            </p>   

     <span className='flex gap-3'>
         <FaStar className='#FFC107'/> 
         <FaStar className='#FFC107'/> 
         <FaStar className='#FFC107'/> 
         <FaStar className='#FFC107'/> 
     
     </span>   
     <h2>John DOe</h2>   
     <p>Accountant</p>
            
            
     </div> 
        </div>
    );
};

export default Review;