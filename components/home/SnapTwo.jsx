import snap2 from "../../assets/snap2.svg";
import Image from "next/image";
import Buttons from "../Buttons";

function SnapTwo() {
  return (
    <>
      <div className="h-28 w-full"></div>

      <div className="snap-center text-white justify-center  flex h-screen   ">
        <div className=" flex flex-col justify-end items-center h-[90%] ">
          <Image src={snap2} />
          <div>
            <Buttons text={"Download"} color={" bg-purple-700 "} />
          </div>
        </div>
      </div>
    </>
  );
}

export default SnapTwo;
