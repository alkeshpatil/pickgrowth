import React from "react";
import Cards from "../Cards";
import HeadOne from "../heading";

function SnapFive() {
  return (
    <div className="snap-center w-screen text-white justify-center  flex  h-screen  border-r-2 ">
      <div className=" w-[60%]   flex flex-col  justify-evenly items-center">
        <HeadOne text={"Our Happy Coustomer Family"} />
        <div className=" flex ">
          <Cards />
          <Cards />
          <Cards />
        </div>
      </div>
    </div>
  );
}

export default SnapFive;
