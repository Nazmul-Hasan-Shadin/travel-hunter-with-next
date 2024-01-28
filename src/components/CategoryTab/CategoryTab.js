
import CategoryCard from '../CategoryCard/CategoryCard';


const CategoryTab = ({category}) => {
    return (
        <div className=' bg-[#101010] h-[100%]'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-[10%] gap-x-8 '>
            {
                category?.slice(0,6).map((category,index)=> <CategoryCard
                key={index} 
                category={category}>

                </CategoryCard> )
            }
            </div>
   <div className='w-36  mx-auto'>
   
   <button className='btn px-9 mt-14  bg-[#008080] text-white '>See All</button>
   </div>
        </div>
    );
};

export default CategoryTab;