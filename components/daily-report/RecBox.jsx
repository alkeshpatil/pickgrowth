import React from "react";

export default function RecBox({head , children , extra }) {
  return (
      <div className="bg-black flex-1 p-7 flex flex-col  rounded-md m-1">
        <div className={"text-green-500 text-2xl " + extra}>{head}</div>
        <div className="text-gray-300">{children}</div>
      </div>
    
  );
}
