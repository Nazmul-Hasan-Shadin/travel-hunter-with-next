import React from 'react';
import PrimaryHeader from '../shared/PrimaryHeader/PrimaryHeader';
import Image from 'next/image';
import logo1 from '@/assets/client/bata.png'
import logo2 from '@/assets/client/logo4.png'
import logo3 from '@/assets/client/logo3.png'
import logo4 from '@/assets/client/biman.png'
import styles from './Client.module.css'
const Client = () => {
    return (
        <div  className={styles.backgroundImg} >
         <div className=''>
            <PrimaryHeader heading={'Our'} styleText={'Client'}></PrimaryHeader>
         </div>

         <div className='flex justify-between px-[9%] '>
            <Image className='  md:px-5 py-5' src={logo1} width={100} height={100} alt='logo'></Image>
            <Image  className=' md:px-5 py-5'  src={logo2} width={100} height={100} alt='logo'></Image>
            <Image className=' md:px-5 py-5' src={logo1} width={100} height={100} alt='logo'></Image>
            <Image className=' md:px-5 py-5' src={logo1} width={100} height={100} alt='logo'></Image>
            <Image  className=' md:px-5 py-5'  src={logo2} width={100} height={100} alt='logo'></Image>
            <Image className=' md:px-5 py-5' src={logo1} width={100} height={100} alt='logo'></Image>
            <Image  className=' md:px-5 py-5'  src={logo2} width={100} height={100} alt='logo'></Image>
         </div>
        </div>
    );
};

export default Client;