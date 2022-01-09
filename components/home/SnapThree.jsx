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
    <>
      <div className="h-28 w-full"></div>

      <div className="snap-center  text-white justify-center sm:text-left text- p-10 sm:p-0   flex flex-col sm:flex-row h-screen  ">
        <div className="sm:w-1/2 w-full   flex flex-col  justify-center  ">
          <div className=" ">
            <HeadOne text={"Make best out of your money"} />
            <p className="mb-4 text-gray-500 sm:text-1xl text-sm ">
              Based on income, goals and plans we pick the most appropriate
              Mutual Fund schemes for you keeping your benefits on highest
              priority. These schemes are being picked by our in-house software
              by measuring various factors of Mutual Fund schemes.
            </p>
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
        <div className="sm:w-1/2 w-full  to-transparent from-[#2B2B2B] flex items-center justify-center  ">
          <div className="sm:w-[65%] pt-20 sm:pt-1 transition ease-in-out duration-1000 ">
            <Image src={image} className="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default SnapThree;
