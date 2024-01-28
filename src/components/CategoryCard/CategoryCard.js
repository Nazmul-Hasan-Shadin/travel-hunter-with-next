import { MdOutlineStarOutline } from "react-icons/md";
import { RxAvatar } from "react-icons/rx";
import { IoBagCheckOutline } from "react-icons/io5";
import Image from "next/image";
const CategoryCard = ({category}) => {
   const{image,passenger_number,bags_number,star,description,car_name,wifi,mobile_charger,bluetooth,drink_include,price,category:categoryProduct}= category
    return (
        <div className="lg:mt-36 ">
         <div className="card card-compact  bg-base-100 shadow-xl">
  <figure>
   
    <Image src={image} width={'100%'} height={'215.17px'} alt="card image of categories"/>
    </figure>
  <div className="card-body">
    <h2 style={{color: 'rgba(0, 0, 0, 0.50)'}} className="card-title">{car_name}</h2>
    <p className="flex text-xl"> 
        <MdOutlineStarOutline/>
        <MdOutlineStarOutline/>
        <MdOutlineStarOutline/>
        <MdOutlineStarOutline/>
        <MdOutlineStarOutline/>
    
    </p>
     <p> {description} </p>
    <div className="card-actions justify-between items-center  ">
       <span className="flex gap-2"> <RxAvatar/> {passenger_number} </span>
       <span className="flex gap-2"> <IoBagCheckOutline/> {passenger_number} </span>
      <button className="btn bg-[#008080] px-5 rounded-[12px] btn-primary">Book Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default CategoryCard;