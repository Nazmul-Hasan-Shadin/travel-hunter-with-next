import profile1 from '@/assets/review/photo1.png'
import profile2 from '@/assets/review/avatar.png'
import profile3 from '@/assets/review/avatar2.png'


const Reviews = () => {
    
    return (
        <div>
             
          {
            slides.map(slide=> <>
             <div>
               {slide}
             </div>
            </>)
          }

        </div>
    );
};

export default Reviews;