import HeadOne from "../heading";
import Buttons from "../Buttons";
import Image from "next/image";
import snapStocks from "../../assets/snapStocks.svg";
import snapMutualfund from "../../assets/snapMutualfund.svg";
import snapInsaurance from "../../assets/snapInsaurance.svg";
import { useState } from "react";

function SnapThree() {
  const [image, setimage] = useState(snapStocks);
  const [color, setColor] = useState([
    "bg-purple-700 ",
    "bg-gray-700",
    "bg-gray-700",
  ]);

  return (
    <>
      {/* <div className="h-28 w-full"></div> */}

      <div className="snap-center  text-white justify-center sm:text-left text-  sm:p-0   flex flex-col sm:flex-row h-screen  ">
        <div className="sm:w-1/2  w-full p-10 sm:p-0 flex flex-col  justify-center  ">
          <div className=" ">
            <HeadOne text={""}> Make best out of your money</HeadOne>
            <p className="mb-4 text-gray-500 sm:text-1xl text-sm ">
              Based on income, goals and plans we pick the most appropriate
              Mutual Fund schemes for you keeping your benefits on highest
              priority. These schemes are being picked by our in-house software
              by measuring various factors of Mutual Fund schemes.
            </p>
            <Buttons
              text="Stocks"
              onclick={() => {
                setimage(snapStocks);
                setColor(["bg-purple-700 ", "bg-gray-700", "bg-gray-700"]);
              }}
              color={" mb-2 " + color[0]}
            />
            <Buttons
              text="Mutual Fund"
              onclick={() => {
                setimage(snapMutualfund);
                setColor(["bg-gray-700 ", "bg-purple-700", "bg-gray-700"]);
              }}
              color={" mb-2 " + color[1]}
            />
            <Buttons
              text="Insaurance"
              onclick={() => {
                setimage(snapInsaurance);
                setColor(["bg-gray-700 ", "bg-gray-700", "bg-purple-700"]);
              }}
              color={" mb-2 " + color[2]}
            />
          </div>
        </div>
        <div className="sm:w-1/2 w-full   to-transparent from-[#2B2B2B] flex items-center justify-center transition ease-in-out duration-1000  ">
          <div className=" w-full    sm:pt-1 transition ease-in-out duration-1000 ">
            <Image
              src={image}
              width={1300}
              height={1500}
              className="border  w-full h-full transition ease-in-out duration-1000"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default SnapThree;
