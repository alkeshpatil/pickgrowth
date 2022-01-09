import Buttons from "../Buttons";
import HeadOne from "../heading";
import Input from "../Input";
export default function SnapFour() {
  return (
    <div className="snap-center">
      <div className="sm:h-0 h-28 border w-full"></div>
      <div className="  text-white   flex h-screen justify-center  ">
        <div className=" w-full sm:w-[60%] text-center sm:text-left  flex flex-col  justify-evenly items-center">
          <HeadOne text={"Free tracks"} />
          <div className="w-full">
            <InputArea />
            <Recommentation />
          </div>
          <p>Want to know how to use it ?</p>
          <div className="w-full flex flex-col  justify-center items-center">
            <p>Powerd By</p>
            <p className="font-logo ">
              pick <span className="text-[#]"></span> growth
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function InputArea() {
  return (
    <div className="w-full  flex items-center justify-center">
      <Input
        placeholder={" Search stocks 'ex : Adani Green'"}
        extraclass={" w-[60%]"}
      />
      <Buttons text="Search" color={"  bg-purple-700"} />
    </div>
  );
}
function Recommentation() {
  return (
    <div className="w-full text-sm mt-3 flex justify-center ">
      <Buttons
        text="TCS"
        color={
          " bg-purpule-700 bg-gray-800 rounded-full text-gray-300 font-light "
        }
      />
      <Buttons
        text="Reliance"
        color={
          " bg-purpule-700 bg-gray-800 rounded-full text-gray-300 font-light "
        }
      />
      <Buttons
        text="Trending"
        color={
          " bg-purpule-700 bg-gray-800 rounded-full text-gray-300 font-light "
        }
      />
      <Buttons
        text="Top 10 "
        color={
          " bg-purpule-700 bg-gray-800 rounded-full text-gray-300 font-light "
        }
      />
    </div>
  );
}
