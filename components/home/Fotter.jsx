import Image from "next/image";
import appstore from "../../assets/appstore.png";
import playstore from "../../assets/playstore.png";
import bse from "../../assets/bse.png";
import amfi from "../../assets/amfi.png";

export default function Fotter() {
  return (
    <div className=" tracking-wider font-body text-white h-1/2">
      <div className="flex flex-col sm:flex-row sm:h-24 p-7 justify-between bg-purple-700 sm:rounded-md w-full items-center ">
        <div className=" ">
          <span className="font-semibold font-body">
            Ⓒ 2018 - {new Date().getFullYear()} Pick Growth .{" "}
          </span>
          All rights reserved , Built with <span className=""> ❤️ </span> in
          India
          <span className=""> 🇮🇳 </span>
        </div>
        <div className=" flex mt-10 sm:mt-0 ">
          <Image src={appstore} height={50} width={170} objectFit="contain" />
          <Image src={playstore} height={50} objectFit="contain" />
        </div>
      </div>
      <div className=" font-light sm:mt-5 p-7 sm:p-0 text-gray-400">
        Mutual fund investments are subject to market risks. Please read the
        scheme information and other related documents carefully before
        investing. Past performance is not indicative of future returns. Please
        consider your specific investment requirements before choosing a fund,
        or designing a portfolio that suits your needs. PickGrowth Wealth
        Management Services makes no warranties or representations, express or
        implied, on products offered through the platform. It accepts no
        liability for any damages or losses, however caused, in connection with
        the use of, or on the reliance of its product or related services. Terms
        and conditions of the website are applicable.
      </div>
      <div className=" flex items-center p-10 sm:p-0  justify-between">
        <div className=" flex mt-6 mb-5">
          <div className=" flex flex-col   mr-5">
            <Image src={bse} height={50} width={50} objectFit="contain" />
            <p className="m-2">BSE-16701</p>
          </div>
          <div className="flex flex-col  mr-5">
            <Image src={amfi} width={70} height={50} objectFit="contain" />
            <p className="m-2">ARN-158460</p>
          </div>
        </div>
        <div className="  font-extrabold font-logo z-10 sm:text-4xl text-2xl  h-full flex  items-center">
      
            <span className="">
              pick <span className="text-[#00FF75]">growth</span>
            </span>
        
        </div>
      </div>
    </div>
  );
}
