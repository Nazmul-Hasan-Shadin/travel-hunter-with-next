import React from 'react';
import PrimaryHeader from '../shared/PrimaryHeader/PrimaryHeader';
import Image from 'next/image';
import about from '@/assets/About/about.png'
import about1 from '@/assets/About/about2.png'


const About = () => {
    return (
        <div className='bg-[#101010] px-[9%] mt-9'>
            <PrimaryHeader heading={'ABOUT'} styleText={'US'} text={'Ready to travel the globe? Discovering new places and activities is simple with our flight booking service.'} ></PrimaryHeader>

            <div className='flex gap-28 '>
                <div className='flex gap-3 '>
              <Image src={about} width={226} height={352} alt='about image'></Image>
              <Image src={about1} width={226} height={256} alt='about image'></Image>
              <Image src={about1} width={226} height={354} alt='about image'></Image>

                </div>
                <div className='w-[36%] space-y-7  text-white'>
               <h2 className='text-5xl'>Influencer Marketing for Your Business</h2>
               <p>
               With over 25 years of experience, we have crafted thousands of Strategic discovery process that enables us to peel back the Layers which enable us to understand, connect, represent and Dominate your market.
               </p>
               <span className='block bg-[#008080] p-4'>phone number 0103449393493</span>
                </div>
            </div>

        </div>
    );
};

export default About;