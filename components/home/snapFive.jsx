import React from "react";
import Cards from "../Cards";
import HeadOne from "../heading";

function SnapFive() {
  return (
    <div className="snap-center h-full ">
      {/* <div className="h-28 w-full"></div> */}
      <div className="  text-white  h-full flex    ">

        <div className="   flex flex-col  sm:justify-center  ">
          <HeadOne text={""} extra={"  w-full"} >Our Happy Coustomer Family</HeadOne>
          {/* <div className=" flex   scrollbar-hide  sm:overflow-x-hidden  overflow-x-scroll   ">
            <Cards extra={"  sm:w-auto "}/>
            <Cards extra={"  sm:w-auto "}/>
            <Cards extra={"  sm:w-auto "}/>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default SnapFive;
