import React from "react";
import Cards from "../Cards";
import HeadOne from "../heading";

function SnapFive() {
  return (
    <div className="snap-center h-full">
      <div className="h-28 w-full"></div>
      <div className="  text-white  h-full justify-center items-center flex    ">

        <div className="   flex flex-col  justify-center items-center">
          <HeadOne text={"Our Happy Coustomer Family"} />
          <div className=" flex items-start  scrollbar-hide sm:overflow-x-hidden w-screen overflow-x-scroll   ">
            <Cards extra={"  sm:w-auto w-full"}/>
            <Cards extra={"  sm:w-auto w-full"}/>
            <Cards extra={"  sm:w-auto w-full"}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SnapFive;
