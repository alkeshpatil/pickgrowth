import Image from "next/image";
import snap1 from "../../assets/snap1.svg";
import HeadOne from "../heading";
import Buttons from "../Buttons";
function Snap() {
  return (
    <>
      <div className="h-28 sm:h-0  snap-center w-full"></div>
      <div className=" w-full text-white  justify- sm:text-left flex sm:flex-row flex-col h-screen">
        <div className="sm:w-1/2 flex p-10 sm:p-0 flex-col  items-center justify-center  ">
          <HeadOne
            text={"Investment just got smarter and reliable."}
            extra={" "}
          />
          <span className="text-purple-700"></span>
          <p className="mb-4 text-gray-500 sm:text-1xl text-sm  ">
            Pick Growth is the fintech solution for all. We're here to help
            growing your wealth and help you gain money confidence. Our custom
            tailor made portfolios would help you immensely achieve your goals.
          </p>
          <div className=" w-full">
            <Buttons text="Get started" color=" bg-purple-700" />
            {/* <Buttons text="Download and try" color=" bg-gray-700" /> */}
          </div>
        </div>
        <div className="sm:w-1/2 sm:p-10 w-full h-1/2 sm:h-full  flex items-center justify-center transition ease-in-out duration-1000 ">
          <Image src={snap1} alt="Product snap 1" className="" />
        </div>
      </div>
    </>
  );
}

export default Snap;
