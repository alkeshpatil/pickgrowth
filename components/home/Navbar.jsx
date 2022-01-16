import Image from "next/image";
import Link from "next/link";
import socialmedia from "../../assets/socialmedia.js";

function Navbar({ children }) {
  return (
    <div className=" scroll-smooth bg-[#161616] flex justify-center  ">
      {/* */}
      <div className="font-body pl-10 sm:p-0 bg-gradient-to-b from-[#161616] to-transparent  fixed z-50 w-full sm:w-[80%] flex justify-between items-center text-cyan-50 h-28 ">
        <div className=" font-extrabold font-logo z-10 sm:text-4xl text-2xl w-1/2 h-full flex  items-center">
          <Link href="/">
            <span className="">
              pick <span className="text-[#00FF75]">growth</span>
            </span>
          </Link>
        </div>

        <div className=" sm:w-1/2 p-10 h-full flex justify-evenly text-sm cursor-pointer  items-center">
          {socialmedia.map((media, index) => (
            <Link href={media.link} className=" cursor-pointer" >
            <Image key={index} src={media.img} />
            </Link>
          ))}
        </div>
      </div>
      {children}
    </div>
  );
}

export default Navbar;
