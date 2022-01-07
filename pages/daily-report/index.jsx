import React from "react";
import Box from "../../components/daily-report/box";
import HeadOne from "../../components/heading";
import Navbar from "../../components/home/Navbar";
import SnapBlock from "../../components/snapBlock";

export default function nifty() {
  return (
    <SnapBlock>
      {/* <Navbar /> */}
      <div className="boder flex h-full justify-center">
        <div className="boder w-[80%] flex flex-col justify-evenly h-full">
          <div className="boder">
            <HeadOne text="Daily Report" extra=" text-6xl" />
            <p className="ml-5">
              Sensex, Nifty end 4-day rally as Covid-19 cases spike{" "}
            </p>
          </div>
          <div className="boder flex">
            <Box head="Nifty" value={"677   87888   8788"} />
            <Box head="Nifty" value={"677   87888   8788"} />
            <Box head="Nifty" value={"677   87888   8788"} />
            <Box head="Nifty" value={"677   87888   8788"} />
          </div>
        </div>
      </div>
    </SnapBlock>
  );
}
