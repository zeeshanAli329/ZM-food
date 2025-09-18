import React from "react";

const Footer = () => {
  return (
    <>
      <div className="flex w-full  text-white items-center justify-center bg-[#FC8A06] mt-20">
        <div className="flex flex-col items-center mt-6 gap-5 ">
          <img
            className=" w-[100px]"
            src="/images/zm-food-logo.jpeg"
            alt="Logo"
          ></img>
          <h1 className="font-semibold text-[20px]">
            Subscribe to our Mailing List
          </h1>
          <div className="flex bg-white rounded-full gap-2  mb-20 ">
            <input
              className="flex-1 px-4 py-2 text-gray-700 rounded-l-full focus:outline-none"
              type="email"
              placeholder="Enter Your email"
            ></input>
            <button className="bg-[black] cursor-pointer  text-white px-6 py-2 rounded-full">
              Join Now
            </button>
          </div>

          {/* <div className="md:flex flex-wrap hidden items-center gap-25  justify-center pb-20">
            <button className=" pr-[10px] font-bold px-5 hover:text-[white] hover:border-black cursor-pointer   py-2 rounded-r-full  text-[black] hover: ">Home</button>
            <button className="border-l-[1px] pr-[10px]  hover:text-[white] hover:border-black cursor-pointer  font-bold px-10 py-2 rounded-r-full0  text-[black] hover: ">Manu</button>
            <button className="border-l-[1px] pr-[10px]  hover:text-[white] hover:border-black cursor-pointer  font-bold px-10 py-2 rounded-r-full  text-[black] hover: ">About</button>
            <button className="border-l-[1px] pr-[10px]  hover:text-[white] hover:border-black cursor-pointer  font-bold px-10 py-2 rounded-r-full  text-[black] hover: ">Gallary</button>
            <button className="border-l-[1px] pr-[10px]  hover:text-[white] hover:border-black cursor-pointer  font-bold px-10 py-2 rounded-r-full  text-[black] hover: ">Contact</button>
            <button className="border-l-[1px] pr-[10px]  hover:text-[white] hover:border-black cursor-pointer  font-bold px-10 py-2 rounded-r-full  text-[black] hover: ">Login</button>





          </div> */}
        </div>
      </div>
    </>
  );
};
export default Footer;
