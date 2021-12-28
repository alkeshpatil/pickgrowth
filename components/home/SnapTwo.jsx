import snap2 from "../../assets/snap2.svg";
import Image from "next/image";
import Buttons from "../Buttons";

function SnapTwo() {
  return (
    <div className="snap-center w-screen text-white justify-center  flex h-screen  border-r-2 ">
      <div className=" flex flex-col justify-end items-center h-[90%] ">
        <Image src={snap2} />
        <div>
          <Buttons text={"Download"} color={" bg-purple-700 "} />
        </div>
      </div>
    </div>
  );
}

export default SnapTwo;
