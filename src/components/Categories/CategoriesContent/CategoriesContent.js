"use client";
import CategoryTab from "@/components/CategoryTab/CategoryTab";
import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

const CategoriesContent = ({ categoryContent, hotel }) => {
  return (
    <Tabs>
      <div className="w-full  ">
        <TabList
          className={
            "  flex gap-4 lg:gap-12 w-9/12 md:w-6/12 mx-auto lg:px-12 bg-white  lg:justify-center  lg:mx-auto"
          }
        >
          <Tab className="flex ">
            <button className="btn  z-10  bg-transparent  hover:bg-[#00C9C9] active:bg-[#00c9c9]  text-black hover:text-white active:text-white">
              Car <MdKeyboardArrowDown className="text-xl" />
            </button>
          </Tab>
          <Tab className={"flex"}>
            <button className="btn flex  bg-transparent  hover:bg-[#00C9C9] active:bg-[#00c9c9]  text-black hover:text-white active:text-white">
              Flight <MdKeyboardArrowDown className="text-xl" />
            </button>
          </Tab>
          <Tab className={"flex"}>
            <button className="btn   bg-transparent  hover:bg-[#00C9C9] active:bg-[#00c9c9]  text-black hover:text-white active:text-white">
              Ship <MdKeyboardArrowDown className="text-xl" />
            </button>
          </Tab>
        </TabList>
      </div>

      <TabPanel>
        <CategoryTab category={categoryContent}></CategoryTab>
      </TabPanel>
      <TabPanel>
        <CategoryTab category={hotel}></CategoryTab>
      </TabPanel>
    </Tabs>
  );
};

export default CategoriesContent;
