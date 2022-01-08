import HeadOne from "../heading";
import Buttons from "../Buttons";
import Image from "next/image";
import snapStocks from "../../assets/snapStocks.png";
import snapMutualfund from "../../assets/snapMutualfund.png";
import snapInsaurance from "../../assets/snapInsaurance.png";
import { useState } from "react";

function SnapThree() {
  const [image, setimage] = useState(snapStocks);

  return (
    <div className="snap-center w-screen text-white justify-center sm:text-left text-center  flex flex-col sm:flex-row h-screen  border-r-2 ">
      <div className="sm:w-1/2 w-full  flex flex-col  items-center justify-center  ">
        <div className=" ">
          <HeadOne text={"Make best out of your money"} />
          <Buttons
            text="Stocks"
            onclick={() => setimage(snapStocks)}
            color=" bg-purple-700"
          />
          <Buttons
            text="Mutual Fund"
            onclick={() => setimage(snapMutualfund)}
            color=" bg-gray-700"
          />
          <Buttons
            text="Insaurance"
            onclick={() => setimage(snapInsaurance)}
            color=" bg-gray-700"
          />
        </div>
      </div>
      <div className="sm:w-1/2 w-full   to-transparent from-[#2B2B2B] flex items-center justify-center  ">
        <div className="sm:w-[65%] pt-11 sm:pt-1 transition ease-in-out duration-1000 ">
          <Image src={image} className="" />
        </div>
      </div>
    </div>
  );
}

export default SnapThree;
