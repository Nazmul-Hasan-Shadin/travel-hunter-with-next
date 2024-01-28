  

import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

import { MdKeyboardArrowDown } from "react-icons/md";

import axios from "axios";

 import './Categories.css'
import PrimaryHeader from "../shared/PrimaryHeader/PrimaryHeader";
import CategoryTab from "../CategoryTab/CategoryTab";



const Categories = async() => {
  

      const data= await axios.get('http://localhost:3004/carData',{
         cache:'force-cache'
      })
      console.log(data.data);

    const car=data?.data?.filter((car)=>car.category ==='car')
      



    return (
        <div className="bg-[#101010]  partial-background-categories ">
            <PrimaryHeader heading={'ALL'} styleText={'CATEGORIES'} text={'Ready to travel the globe? Discovering new places and activities is simple with our flight booking service.'}></PrimaryHeader>
            
            {/* ==============categories============================= */}

            <Tabs>
 <div className="h-full">

 <TabList className={' flex gap-12 w-[29%] lg:px-12 bg-white   mx-auto'} >
      <Tab className="flex "><button className="btn   bg-transparent  hover:bg-[#00C9C9] active:bg-[#00c9c9]  text-black hover:text-white active:text-white">Flight  <MdKeyboardArrowDown className="text-xl"/> </button></Tab>
     <Tab className={'flex'}><button className="btn flex  bg-transparent  hover:bg-[#00C9C9] active:bg-[#00c9c9]  text-black hover:text-white active:text-white">Flight <MdKeyboardArrowDown className="text-xl"/> </button></Tab>
       <Tab className={'flex'}><button className="btn   bg-transparent  hover:bg-[#00C9C9] active:bg-[#00c9c9]  text-black hover:text-white active:text-white">Flight <MdKeyboardArrowDown className="text-xl"/> </button></Tab>
    </TabList>
 </div>


    <TabPanel>
       <CategoryTab category={car}></CategoryTab>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>  


        </div>
    );
};

export default Categories;