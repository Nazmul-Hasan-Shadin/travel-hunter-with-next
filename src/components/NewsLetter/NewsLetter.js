const NewsLetter = () => {
  return (
    <div
      className=" bg-no-repeat my-2 bg-contain  md:bg-cover  w-full items-center  flex justify-end h-[23vh] lg:h-[40vh]  "
      style={{
        backgroundImage: `url(https://i.ibb.co/FhgJdJg/footerbanner.png})`,
      }}
    >
      <div className=" w-7/12 lg:w-6/12      lg:space-y-2  text-white  ">
        <div className="lg:space-y-1 ">
          <h2 className="text-xl lg:text-md">Never miss an offer</h2>
          <p className=" text-[10px] lg:text-xl">Subscribe and be the first to receive our exclusive offers</p>
        </div>
        <div className="">
        
        <input type="email" className="p-1 lg:p-5   lg:text-md rounded-lg h-4 w-6/12 lg:w-44 " placeholder="Enter your email " />
          <button className="btn   text-[6px]  lg:w-[111px] bg-[#008080] hover:bg-green-600  btn-sm md:btn-md z-10   text-white btn-outline opacity: 0.1 lg:opacity-1 -translate-x-8 h-[1.3rem] min-h-[1rem] lg:h-[2rem] lg:min-h-[2rem] ">
            subscribe
          </button>
          <br />

        <div className=" ">
        <input
            type="checkbox"
            checked="checked"
            className="checkbox h-3 w-3 checkbox-secondary lg:mt-3"
          />
          <span className=" blcok text-[10px] ">
            I would like to get offers and news from American Airways. I have
         
          </span>
        </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
