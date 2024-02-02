import React from 'react';

const PrimaryHeader = ({heading,styleText,text}) => {
    return (
        <div className=''>
            <div className='text-center text-white lg:py-12'>
                <h2 className='text-2xl lg:text-6xl '>{heading} <span className='text-[#00C9C9]'>  {styleText} </span></h2>
                <p className='w-full lg:w-3/12 mx-auto pt-5 '> {text} </p>
            </div>
        </div>
    );
};

export default PrimaryHeader;