import React from "react";
import Image from "next/image";
import profile from "../assets/profile.svg";
export default function Cards({extra}) {
  return (
    <div className={" p-10  flex m-8  flex-col  rounded-md bg-pg-purple " + extra}>
      <div className="flex mt-6">
        <Image src={profile} width={100} height={100} className="m-2" />
        <div className="ml-7">
          <p className="font-medium text-xl">jane choper</p>
          <p className="font-light text-sm">
            Lorem ipsum dolor sit amet, consectetur
          </p>
        </div>
      </div>
      <div className=" text-sm mt-10 text-gray-400">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ea
        sapiente, eius quam aliquid, libero nobis rem in illum, reiciendis
        numquam distinctio laboriosam inventore nihil quis soluta veniam
        suscipit facilis.
      </div>
      <div className="text-2 mt-8 flex justify-between">
        <span className="text-gray-300">06 | 12 | 2021 </span>
        <span className="font-medium">ASMA GROUPS </span>
      </div>
    </div>
  );
}
