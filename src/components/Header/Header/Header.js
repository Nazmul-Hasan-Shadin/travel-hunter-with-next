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
        <HeaderText></HeaderText>

        
        <AdvancedSearch></AdvancedSearch>
        </div>
    
        </div>
    );
};

export default Header;