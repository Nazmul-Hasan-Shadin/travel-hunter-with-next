 'useClient'
const HeaderText = ({ onclick,className }) => {
  return (
    <div className={`w-full relative lg:w-[64%]   text-white space-y-3 pt-14 mt-[37% lg:pl-[184px]  bg-[#101010] lg:bg-opacity-0 lg:mt-0 h-[400px]  ${className} `}>
      <h1 className=" text-3xl lg:text-6xl p-4 lg:p-0">
        {" "}
        Start <br /> your <span className="text-[#00C9C9]"> unforgettable </span>
        <br />
        journey with us.{" "}
      </h1>
      <p className=" text-sm p-4 lg:text-2xl lg:p-0">
        The best travel for your jouney begins now
      </p>

      <div className="relative mx-auto   w-[90%] lg:w- ">
        <input
          type="text"
          placeholder="Email here"
          className="input  input-bordered input-md w-full max-w-xs text-black  opacity-[0.1] bg-[#FFF]"
        />

        <div className=" relative lg:absolute  lg:right-12 top-0 lg:w-[300px] ">
          <button
            onClick={onclick}
            className="btn w-[111px] bg-[#008080] hover:bg-green-600 btn-md z-10 rounded-[50px]  text-white btn-outline opacity: 0.1 lg:opacity-1 "
          >
            Get Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeaderText;
