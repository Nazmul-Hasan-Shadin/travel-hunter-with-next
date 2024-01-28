import Navbar from '@/components/Header/Navbar/Navbar';
import React from 'react';
import bg from '../../../assets/Banner/carBanner.png';

const Header = () => {
    return (
        <div className=' h-[1354px] lg:h-[100vh]'>
            <div className=" bg-center bg-cover  bg-no-repeat w-[412px] h-[216px] lg:w-full lg:h-full" style={{backgroundImage:"url('/carBanner.png')",height:'100%',width:'100%'}}>
        <Navbar></Navbar>
        
       
        </div>
        </div>
    );
};

export default Header;