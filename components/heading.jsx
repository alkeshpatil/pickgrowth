import React from "react";

function HeadOne({ text , extra }) {
  return (
    <>
      <h1 className={"text-5xl m-4  font-semibold sm:text-[45px] " + extra }>{text}</h1>
    </>
  );
}

export default HeadOne;
