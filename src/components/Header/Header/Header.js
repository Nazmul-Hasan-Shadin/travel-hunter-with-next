import Navbar from '@/components/Header/Navbar/Navbar';
import React from 'react';
import bg from '../../../assets/Banner/carBanner.png';
import HeaderText from '@/components/Header/HeaderText/HeaderText';
import AdvancedSearch from '../AdvancedSearch/AdvanchedSearch';

const Header = () => {
    return (
        <div className=''>
            <div className="bg-no-repeat h-[40vh] bg-cover bg-center lg:h-[97vh] w-full  " style={{backgroundImage:"url('/carBanner.png')"}}>
      
      
           <Navbar></Navbar>
        
           <HeaderText className="hidden lg:block"></HeaderText>
           <AdvancedSearch className="hidden lg:block" ></AdvancedSearch>
        </div>
     
        <HeaderText className="block lg:hidden"></HeaderText>
        <AdvancedSearch className="block md:hidden"></AdvancedSearch>
      
        </div>
    );
};

export default Header;