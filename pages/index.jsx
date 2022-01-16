import { useRef } from "react";
import Snap from "../components/home/snap";
import SnapFive from "../components/home/snapFive";
import SnapSeven from "../components/home/snapSeven";
import SnapSix from "../components/home/SnapSix";
import SnapThree from "../components/home/SnapThree";
import SnapTwo from "../components/home/SnapTwo";
import GoToGetingStartedSection from "../components/home/goToGetingStartedSection";
import Fotter from '../components/home/Fotter';

export default function Home() {
  const getStartedSection = useRef(null);
  const goToGetStartedSection = () => {
    console.log("clicked");
    console.log(window.scrollTo);
    // console.log(getStartedSection.current.offsetTop);
    window.scrollTo({
      top: 1000,
      left: 100,
      behavior: 'smooth'
    });
  };
  return (
    <div className="  overflow-x-hidden bg-[#161616] font-body sm:w-[80%] w-full snap-mandatory  scrollbar-hide h-screen  overflow-scroll ">
      <Snap />
      {/* <GoToGetingStartedSection /> */}
      <SnapTwo />
      <SnapThree />
      <SnapFive />
      <SnapSix setRef={getStartedSection} />
      {/* <SnapSeven /> */}
      <Fotter />
    </div>
  );
}
