import React from "react";

export default function SnapBlock(props) {
  return (
    <div className="snap-center font-body bg-[#161616] w-screen text-white h-screen  border-r-2 ">
      {props.children}
    </div>
  );
}
