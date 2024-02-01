
import React from 'react';
import { FaStar } from 'react-icons/fa6';
import image from '@/assets/review/photo1.png'
import Image from 'next/image';
const Review = () => {
    return (
        <div>
        <div > 
      <figure>
        <Image src={image} alt="review image" width={300} height={300} />

      </figure>
        <p>
        But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound the actual teachings of the great explorer of the truth, the master- builder of human happiness.
            </p>   

     <span className='flex gap-10'>
         <FaStar/> 
         <FaStar/> 
         <FaStar/> 
         <FaStar/> 
     
     </span>   
     <h2>John DOe</h2>   
     <p>Accountant</p>
            
            
     </div> 
        </div>
    );
};

export default Review;