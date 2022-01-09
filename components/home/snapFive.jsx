import React from "react";
import Cards from "../Cards";
import HeadOne from "../heading";

function SnapFive() {
  return (
    <>
      <div className="h-28 w-full"></div>
      <div className="snap-center  text-white justify-center  flex h-full   ">

        <div className="   flex flex-col  justify-evenly items-center">
          <HeadOne text={"Our Happy Coustomer Family"} />
          <div className=" flex   ">
            <Cards />
            <Cards />
            <Cards />
          </div>
        </div>
      </div>
    </>
  );
}

export default SnapFive;
