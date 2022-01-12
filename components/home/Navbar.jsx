import Link from "next/link";

function Navbar({ children }) {
  return (
    <div className=" bg-[#161616] flex justify-center  ">
      {/* */}

      <div className="font-body pl-10 sm:p-0 bg-gradient-to-t to-[#161616] from-transparent  fixed z-50 w-full sm:w-[80%] flex justify-between items-center text-cyan-50 h-28 ">
        <div className=" font-extrabold font-logo z-10 sm:text-4xl text-2xl w-1/2 h-full flex  items-center">
          <Link href="/">
            <span className="">
              pick <span className="text-[#00FF75]">growth</span>
            </span>
          </Link>
        </div>

        <div className=" w-1/2 h-full flex justify-evenly text-sm   items-center">
          {/* <div className="text-gray-400">
            {" "}
            <Link href="/daily-report">Daily Report</Link>
          </div>
          <div className="text-gray-400">
            <Link href="/daily-report/loser-gainer">Gain | Losse</Link>{" "}
          </div>
          <div className="text-gray-400">
            {" "}
            <Link href="/daily-report/flls-dlls">FIIs | DIIs Traded</Link>
          </div> */}
          {/* <div className="text-gray-400">
            {" "}
            <Link href="/daily-report"></Link>
          </div> */}
        </div>
      </div>
      {children}
    </div>
  );
}

export default Navbar;
