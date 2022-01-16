import HeadOne from "../heading";
import Buttons from "../Buttons";
import Image from "next/image";
import snapStocks from "../../assets/snapStocks.svg";
import snapMutualfund from "../../assets/snapMutualfund.svg";
import snapInsaurance from "../../assets/snapInsaurance.svg";
import { useState } from "react";
import servise from "../../assets/servise";

function SnapThree() {
  const [image, setimage] = useState(snapStocks);
  const [text, setText] = useState(servise[0]);
  const [color, setColor] = useState([
    "bg-purple-700 ",
    "bg-gray-700",
    "bg-gray-700",
  ]);
  console.log(image);
  return (
    <>
      {/* <div className="h-28 w-full"></div> */}

      <div className="snap-center text-white justify-center sm:text-left text- sm:p-0 flex flex-col sm:flex-row h-screen  ">
        <div className="sm:w-1/2  w-full p-10 sm:p-0 flex flex-col  justify-center  ">
          <div className=" ">
            <HeadOne text={""}> Make best out of your money</HeadOne>
            <Buttons
              text="Stocks"
              onclick={() => {
                setimage(snapStocks);
                setText(servise[0]);
                setColor(["bg-purple-700 ", "bg-gray-700", "bg-gray-700"]);
              }}
              color={" mb-2 " + color[0]}
            />
            <Buttons
              text="Mutual Fund"
              onclick={() => {
                setimage(snapMutualfund);
                setText(servise[1]);

                setColor(["bg-gray-700 ", "bg-purple-700", "bg-gray-700"]);
              }}
              color={" mb-2 " + color[1]}
            />
            <Buttons
              text="Insaurance"
              onclick={() => {
                setimage(snapInsaurance);
                setText(servise[2]);

                setColor(["bg-gray-700 ", "bg-gray-700", "bg-purple-700"]);
              }}
              color={" mb-2 " + color[2]}
            />
          </div>
          <p className="mb-4 text-gray-300 sm:text-1xl text-md transition ease-in-out duration-1000 ">
            {text.discription}
            <p className="pl-4 pt-4 font-semibold text-lg text-white ">
              {text.features.map((fe, key) => (
                <li>{fe}</li>
              ))}
            </p>
          </p>
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
