"use client"
import React from 'react';
import newsLetterBg from '@/assets/Banner/footerbanner.png'
const NewsLetter = () => {
    return (
        <div className='px-12 bg-no-repeat bg-center w-full flex items-center ' style={{backgroundImage:`url(https://i.ibb.co/FhgJdJg/footerbanner.png})`, height:'300px'}}>
            <div className='ml-auto w-4/12 flex flex-col space-y-2 text-white ' >
           <div className='space-y-1'>
           <h2 className='text-xl'>Never miss an offer</h2>
             <p>Subscribe and be the first to receive our exclusive offers</p>

           </div>
             <div className="w-[90%]  ">
        <input
          type="text"
          border
          placeholder="Email here"
          className="input  input-bordered input-md w-full max-w-xs text-black   bg-[#FFF]"
        />
       <button
            onClick={'onclick'}
            className="btn w-[111px] bg-[#008080] hover:bg-green-600 btn-md z-10   text-white btn-outline opacity: 0.1 lg:opacity-1 -translate-x-8 "
          >
            Subscribe
          </button>
 
      </div>
             </div>
        </div>
    );
};

export default NewsLetter;