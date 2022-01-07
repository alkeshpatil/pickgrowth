import React from "react";
import RecBox from "../../components/daily-report/RecBox";
import HeadOne from "../../components/heading";
import Navbar from "../../components/home/Navbar";
import SnapBlock from "../../components/snapBlock";

export default function FllsDlls() {
  return (
    <SnapBlock>
      {/* <Navbar /> */}
      <div className="border-0-2 flex h-full justify-center">
        <div className="border-0-2 w-[80%] flex flex-col justify-end h-full">
          <div className="border-0-2 h-1/3 flex flex-col justify-center  ">
            <HeadOne
              text="How FIIs | DIIs Traded ( In Crores)"
              extra=" text-6xl"
            />
            <div className=" flex m-4">
              <RecBox head={"DLL"} >
                  DDL VALUE
              </RecBox>
              <RecBox head={"FLL"} extra={" text-red-500"} >
                  DDL VALUE
              </RecBox>
            </div>
          </div>
          <div className="border-0-2 h-1/2  flex flex-col justify-center">
            <HeadOne
              text="How FIIs | DIIs  for Next trade day"
              extra=" text-6xl"
            />
            <div className=" flex m-4">
            <RecBox head={"DLL"} >
                  DDL VALUE
              </RecBox>
              <RecBox head={"FLL"} extra={" text-red-500"} >
                  DDL VALUE
              </RecBox>
            </div>
          </div>
        </div>
      </div>
    </SnapBlock>
  );
}
