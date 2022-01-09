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
          <div className=" flex sm:flex-row flex-col   ">
            <Cards extra={" border sm:w-auto w-80"}/>
            <Cards extra={" border sm:w-auto w-80"}/>
            <Cards extra={" border sm:w-auto w-80"}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SnapFive;
