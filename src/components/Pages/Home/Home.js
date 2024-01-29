import BrandLogo from '@/components/BrandLogo/BrandLogo';
import Categories from '@/components/Categories/Categories';
import Client from '@/components/Client/Client';
import Service from '@/components/Service/Service';
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
      
        </div>
    );
};

export default RootHome;