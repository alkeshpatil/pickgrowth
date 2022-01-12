import snap2 from "../../assets/snap2.svg";
import Image from "next/image";
import Buttons from "../Buttons";
import HeadOne from "../heading";

function SnapTwo() {
  return (
    < div className="snap-center">
      {/* <div className="h-28 w-full"></div> */}

      <div className="  text-white justify-center  flex h-screen   ">
        <div className=" flex flex-col justify-center items-center h-[90%] ">
          <div className="sm:p-0  p-10">
          <HeadOne extra=" " text={"It’s not just what technology can do but what people think it should do. Pick Growth App helps you track all your and family investments on the go."} />
            <Buttons text={"Download"} color={" bg-purple-700 "} />
          </div>
          <Image src={snap2} />
        </div>
      </div>
    </div>
  );
}

export default SnapTwo;
