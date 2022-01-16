import Buttons from "../Buttons";
import HeadOne from "../heading";

export default function SnapSeven() {
  return (
    <div className="snap-center">
  

      <div className=" w-full  text-white  justify- sm:text-left flex sm:flex-row flex-col h-screen">
        <div className="sm:w-1/2 flex p-7 sm:p-0 flex-col    justify-center ">
          <HeadOne text="" extra={" text-left"} > Contact Us </HeadOne>

          <p className="mb-4 text-gray-400 sm:text-1xl text-md font-regular font-light    ">
            Mutual fund investments are subject to market risks. Please read the
            scheme information and other related documents carefully before
            investing. Past performance is not indicative of future returns.
            Please consider your specific investment requirements before
            choosing a fund, or designing a portfolio that suits your needs.
            PickGrowth Wealth Management Services makes no warranties or
            representations, express or implied, on products offered through the
            platform. It accepts no liability for any damages or losses, however
            caused, in connection with the use of, or on the reliance of its
            product or related services. Terms and conditions of the website are
            applicable.
          </p>
        </div>
        <div className="sm:w-1/2 w-full h-1/2  sm:h-full  flex  sm:items-center justify-center">
          <form
            action=""
            className=" p-7 w-full sm:w-[80%] flex flex-col  rounded-md"
          >
            <HeadOne text="" extra={" text-left"} >Our info</HeadOne>

            <div className=" flex sm:flex-row flex-col justify-between text- mb-2">
              <span className="">Hyderabad </span>
              <span className="">info@pickgrowth.com</span>
              <span className="">AMFI Registration No. 158460 </span>
            </div>
            <Buttons text="Call directly" color=" bg-purple-700  mb-4" />
            <p className=" font-thin text-sm ">
              Copyright © PickGrowth Wealth Management Services 2022 All rights
              reserved
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
