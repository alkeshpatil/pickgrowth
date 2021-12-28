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
    <div className="snap-center w-screen text-white justify-center  flex  h-screen  border-r-2 ">
      <div className="w-1/2  flex flex-col  items-center justify-center  ">
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
      <div className="w-1/2    to-transparent from-[#2B2B2B] flex items-center justify-center  ">
        <div className="w-[65%] transition ease-in-out duration-1000 ">
          <Image src={image} className="" />
        </div>
      </div>
    </div>
  );
}

export default SnapThree;
