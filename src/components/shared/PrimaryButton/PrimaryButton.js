import React from 'react';

const PrimaryButton = ({text,onclick}) => {
    return (
  
             <button onClick={onclick}  className='btn w-[111px] bg-[#008080] hover:bg-green-600 btn-md z-10 rounded-[50px]  text-white btn-outline'>{text}</button> 
     
    );
};

export default PrimaryButton;