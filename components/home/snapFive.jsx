import React from "react";
import Cards from "../Cards";
import HeadOne from "../heading";

function SnapFive() {
  return (
    <div className="snap-center h-full">
      <div className="h-28 w-full"></div>
      <div className="  text-white justify-center  flex    ">

        <div className="   flex flex-col  justify-evenly items-center">
          <HeadOne text={"Our Happy Coustomer Family"} />
          <div className=" flex  scrollbar-hide w-screen overflow-x-scroll   ">
            <Cards extra={" border sm:w-auto w-full"}/>
            <Cards extra={" border sm:w-auto w-full"}/>
            <Cards extra={" border sm:w-auto w-full"}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SnapFive;
