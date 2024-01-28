import Image from "next/image"
import brandlogo1 from "../../assets/brand/FedExLogo.svg"
import brandlogo2 from "../../assets/brand/Hubspot Logo.svg"
import brandlogo3 from "../../assets/brand/logo.png"
import brandlogo4 from "../../assets/brand/logo1.svg"
import brandlogo5 from "../../assets/brand/Walmart Logo.svg"
const BrandLogo = () => {
    return (
        <div className=" hidden lg:block bg-[#008080] ">
            <div className="flex gap-20 justify-center py-9 ">
               <Image src={brandlogo1} width={300} height={300} alt="brandlogo"/>
               <Image src={brandlogo2} width={300} height={300} alt="brandlogo"/>
               <Image src={brandlogo3} width={300} height={300} alt="brandlogo"/>
               <Image src={brandlogo4} width={300} height={300} alt="brandlogo"/>
               <Image src={brandlogo5} width={300} height={300} alt="brandlogo"/>
                </div>
        </div>
    );
};

export default BrandLogo;