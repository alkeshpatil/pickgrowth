import snap2 from "../../assets/snap2.svg";
import Image from "next/image";
import Buttons from "../Buttons";
import HeadOne from "../heading";

function SnapTwo() {
  return (
    <div className="snap-center">
      <div className="   text-white sm:justify-center  flex    ">
        <div className=" flex flex-col sm:justify-center items-center  ">
          <div className="sm:p-0 sm:text-center p-10">
            <HeadOne extra="  " text={""}>
              It’s not just what technology can 
            </HeadOne>
            <p className="mb-4 text-gray-400">
            do but what people think it
              should do.
              Pick Growth App helps you track all your and family investments on
              the go.
            </p>
          </div>
          <Image src={snap2} />
            <Buttons text={"Download"} color={" bg-purple-700 "} />
        </div>
      </div>
    </div>
  );
}

export default SnapTwo;
