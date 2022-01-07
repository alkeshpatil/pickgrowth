import React from "react";
import RecBox from "../../components/daily-report/RecBox";
import HeadOne from "../../components/heading";
import Navbar from "../../components/home/Navbar";
import SnapBlock from "../../components/snapBlock";

export default function GainersLossers() {
  return (
    <SnapBlock>
      {/* <Navbar /> */}
      <div className="border-0-2 flex h-full justify-center">
        <div className="border-0-2 w-[80%] flex flex-col justify-end h-full">
          <div className="border-0-2 h-1/3 flex flex-col justify-center  ">
            <HeadOne text="Top Loser | Gainer" extra=" text-6xl" />
            <p className="ml-5">
              Sensex, Nifty end 4-day rally as Covid-19 cases spike
            </p>
          </div>
          <div className="border-0-2 h-1/2  flex flex-col ">
            <div className=" flex m-4">
              <RecBox head={"Top Gainer"} extra={""}>
                This is top gainer
              </RecBox>
              <RecBox head={"Top Looser"} extra={" text-red-400"}>
                This is top losser
              </RecBox>
            </div>
          </div>
        </div>
      </div>
    </SnapBlock>
  );
}
