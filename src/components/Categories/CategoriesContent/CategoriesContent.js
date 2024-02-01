 "use client"
import CategoryTab from '@/components/CategoryTab/CategoryTab';
import React from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

const CategoriesContent = ({categoryContent,hotel}) => {
    return (
        <div>
            
            <Tabs>
 <div className="h-full">

 <TabList className={' flex gap-12 w-[29%] lg:px-12 bg-white   mx-auto'} >
      <Tab className="flex "><button className="btn   bg-transparent  hover:bg-[#00C9C9] active:bg-[#00c9c9]  text-black hover:text-white active:text-white">Car  <MdKeyboardArrowDown className="text-xl"/> </button></Tab>
     <Tab className={'flex'}><button className="btn flex  bg-transparent  hover:bg-[#00C9C9] active:bg-[#00c9c9]  text-black hover:text-white active:text-white">Flight <MdKeyboardArrowDown className="text-xl"/> </button></Tab>
       <Tab className={'flex'}><button className="btn   bg-transparent  hover:bg-[#00C9C9] active:bg-[#00c9c9]  text-black hover:text-white active:text-white">Ship <MdKeyboardArrowDown className="text-xl"/> </button></Tab>
    </TabList>
 </div>


    <TabPanel>
       <CategoryTab category={categoryContent}></CategoryTab>
    </TabPanel>
    <TabPanel>
    <CategoryTab category={hotel}></CategoryTab>
    </TabPanel>
  </Tabs>  
        </div>
    );
};

export default CategoriesContent;