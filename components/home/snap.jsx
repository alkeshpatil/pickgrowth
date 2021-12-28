import Image from "next/image";
import snap1 from "../../assets/snap1.svg";
import HeadOne from "../heading";
import Buttons from "../Buttons";
function Snap() {
  return (
    <div className="snap-center w-screen text-white justify-center  flex  h-screen  border-r-2 ">
      <div className="w-1/3  flex flex-col items-center justify-center  ">
        <HeadOne text={"Its not your earning saving makes you rich"} />
        <span className="text-purple-700"></span>
        <p className="ml-4 mr-4">
          Just compound your wealth and grow rich by your wealth managment
          skills and to make your work easy we have something for you
        </p>
        <div className=" w-full">
          <Buttons text="What's that" color=" bg-purple-700" />
          <Buttons text="Download and try" color=" bg-gray-700" />
        </div>
      </div>
      <div className="w-1/2   flex items-center justify-center  ">
        <Image src={snap1} alt="Product snap 1" />
      </div>
    </div>
  );
}

export default Snap;
