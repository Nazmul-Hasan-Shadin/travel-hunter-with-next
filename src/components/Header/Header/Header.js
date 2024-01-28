import Navbar from '@/components/Header/Navbar/Navbar';
import React from 'react';
import bg from '../../../assets/Banner/carBanner.png';
import HeaderText from '@/components/Header/HeaderText/HeaderText';
import AdvancedSearch from '../AdvancedSearch/AdvanchedSearch';

const Header = () => {
    return (
        <div className=''>
            <div className=" bg-center bg-cover  bg-no-repeat w-[412px] h-[216px] lg:w-full lg:h-full" style={{backgroundImage:"url('/carBanner.png')",height:'100%',width:'100%'}}>
        <Navbar></Navbar>
        <HeaderText></HeaderText>

        
        <AdvancedSearch></AdvancedSearch>
        </div>
    
        </div>
    );
};

export default Header;