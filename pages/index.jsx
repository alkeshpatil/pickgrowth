import Navbar from "../components/home/Navbar";
import Snap from "../components/home/snap";
import SnapFive from "../components/home/snapFive";
import SnapFour from "../components/home/SnapFour";
import SnapSeven from "../components/home/snapSeven";
import SnapSix from "../components/home/SnapSix";
import SnapThree from "../components/home/SnapThree";
import SnapTwo from "../components/home/SnapTwo";

export default function Home() {
  return (
    // <div className="flex items-center justify-center">
    // <div className=" flex justify-center  ">
    <div className="snap-y font-body sm:w-[80%] w-full snap-mandatory bg-[#161616] scrollbar-hide h-screen  overflow-scroll ">
      {/* <Navbar /> */}
      <Snap />
      <SnapTwo />
      <SnapThree />
      <SnapFour />
      <SnapFive />
      <SnapSix />
      <SnapSeven />
      {/* </div> */}
      {/* </div> */}
      //{" "}
    </div>
  );
}
