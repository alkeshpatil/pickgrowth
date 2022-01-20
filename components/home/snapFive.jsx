import React from "react";
import Cards from "../Cards";
import HeadOne from "../heading";

function SnapFive() {
  return (
    <div className="  sm:p-0 sm:text-center p-7">
      <div className="h-28 sm:h-0 w-full"></div>

      <HeadOne text={""} extra={" text-white w-full"}>
        Our Happy Coustomer Family
      </HeadOne>
      <p className="text-gray-400 text-sm">
        {" "}
        Amet tenetur distinctio qui ipsa voluptates mollitia libero cum id
        molestias non incidunt, quisquam sunt nihil impedit assumenda aliquid
        obcaecati porro.{" "}
      </p>
      <div className="flex scrollbar-hide h-full sm:p-7 mt-10 overflow-x-scroll ">
      <Cards extra={"    sm:w-auto "}/>
      <Cards extra={"   sm:w-auto "}/>
      <Cards extra={"   sm:w-auto "}/>



      </div>
    </div>
  );
}

export default SnapFive;

// <div className="snap-center h-full ">
//   {/* <div className="h-28 w-full"></div> */}
//   <div className="  text-white  h-full flex    ">

//     <div className="   flex flex-col  sm:justify-center  ">
//       {/* <div className=" flex   scrollbar-hide  sm:overflow-x-hidden  overflow-x-scroll   ">
//         <Cards extra={"  sm:w-auto "}/>
//         <Cards extra={"  sm:w-auto "}/>
//       </div> */}
//     </div>
//   </div>
// </div>
