import About from '@/components/About/About';
import BrandLogo from '@/components/BrandLogo/BrandLogo';
import Categories from '@/components/Categories/Categories';
import Client from '@/components/Client/Client';
import Service from '@/components/Service/Service';
import Experience from '@/components/TravelExperience/Experience';
import TreapDeal from '@/components/TreapDeal/TreapDeal';
import React from 'react';

const RootHome = () => {
    return (
        <div>
     <BrandLogo></BrandLogo>
     <TreapDeal></TreapDeal>
     <Categories></Categories>
      <Service></Service>
      <Client></Client>
      <About></About>
     <Experience></Experience>
     
     
      
        </div>
    );
};

export default RootHome;