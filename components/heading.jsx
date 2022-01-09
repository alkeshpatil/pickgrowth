import React from "react";

function HeadOne({ text , extra }) {
  return (
    <>
      <h1 className={"sm:text-5xl text-2xl mt-4 mb-4  font-semibold sm:text-[45px] " + extra }>{text}</h1>
    </>
  );
}

export default HeadOne;
