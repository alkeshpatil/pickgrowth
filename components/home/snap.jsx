import Image from "next/image";
import snap1 from "../../assets/snap1.svg";
import HeadOne from "../heading";
import Buttons from "../Buttons";
import Link from "next/link";
function Snap({ scrollFun }) {
  return (
    <>
      <div className="h-28 sm:h-0  snap-center w-full"></div>
      <div className=" w-full text-white  justify- sm:text-left flex sm:flex-row flex-col h-screen">
        <div className="sm:w-1/2 flex p-7 sm:p-0 flex-col  items-center justify-center  ">
          <HeadOne>          
            Investment just got smarter and reliable.
          </HeadOne>
          <span className="text-purple-700"></span>
          <p className="mb-4 text-gray-400 sm:text-1xl text-sm  ">
            Pick Growth is the fintech solution for all. We're here to help
            growing your wealth and help you gain money confidence. Our custom
            tailor made portfolios would help you immensely achieve your goals.
          </p>
          <div className=" w-full ">
            <Buttons
              text=""
              color=" bg-purple-700"
            >
              <Link href="#get-started" scroll={true}>
                Get started
              </Link>
            </Buttons>
            {/* <Buttons text="Download and try" color=" bg-gray-700" /> */}
          </div>
        </div>
        <div className="sm:w-1/2 sm:p-7 pt-16 w-full h-1/2 sm:h-full  flex items-center justify-center transition ease-in-out duration-1000 ">
          <Image src={snap1} alt="Product snap 1" className="" />
        </div>
      </div>
    </>
  );
}

export default Snap;
