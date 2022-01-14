import Buttons from "../Buttons";
import HeadOne from "../heading";
import Input from "../Input";
export default function SnapSix() {
  return (
    <div className="snap-center">
      <div className="  sm:h-0 text-white h-20    w-full">
       
      </div>

      <div className=" w-full h-screen text-white  justify- sm:text-left flex sm:flex-row flex-col ">
        <div className="sm:w-1/2 flex p-10 sm:p-0 flex-col    justify-center ">
          <HeadOne text="" extra={" text-left"} >How to get started?</HeadOne>
          <span className="text-purple-700"></span>
          <p className="mb-4 text-gray-300 sm:text-1xl text-lg font-regular    ">
            We believe investment is risky and should be handled carefully.
            Hence, we avoid Robo Advisors, Auto suggestion of investments based
            on goals.
          </p>
          <p className="mb-4 text-gray-400 sm:text-1xl text-md font-regular    ">
            Once we receive your interest, we schedule a call with you.
            Understand your income, ongoing investments and financial goals.
            After analysing your profile, we propose various investment options
            custom tailor made for you.
          </p>
          <div className=" w-full">
            {/* <Buttons text="Download and try" color=" bg-gray-700" /> */}
          </div>
        </div>
        <div className="sm:w-1/2 w-full h-1/2 sm:h-full  flex items-center justify-center">
          <form action="" className=" p-10 flex flex-col  rounded-md">
            <HeadOne text="" extra={"  text-left"} >Contact Us</HeadOne>
            <Input placeholder={"Name"} extraclass={" m-0 mb-2"} />
            <Input placeholder={"email"} extraclass={" m-0 mb-2"}/>
            <Input placeholder={"Phone no."} extraclass={" m-0 mb-2"} />
            <Input placeholder={"comments"} extraclass={" m-0 mb-3"}/>
            <Buttons text="Get started" color=" bg-purple-700 mr-0  " />
          </form>
        </div>
      </div>
    </div>
  );
}
