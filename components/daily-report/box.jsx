import React from "react";

export default function box({ head, value }) {
  return (
    <div className="w-80 h-80 mr-10 rounded-lg text-2xl p-10 bg-black flex flex-col justify-between">
      {" "}
      <div className="">{head}</div>{" "}
      <div className=" text-gray-300">{value} </div>
    </div>
  );
}
