import Link from "next/link";

function Navbar({ children }) {
  return (
    <>
      {/* bg-gradient-to-t to-[#161616] from-transparent */}
      <div className="font-body fixed w-screen  flex justify-between items-center text-cyan-50 h-28 ">
        <div className=" font-extrabold font-logo z-10  text-4xl w-1/3 h-full flex justify-center items-center">
          <Link href="/"><span>pick <span className="text-[#00FF75]">growth</span></span></Link>
        </div>

        <div className=" w-1/2 h-full flex justify-evenly  items-center">
          <div className="text-gray-400">
            {" "}
            <Link href="/daily-report">Daily Report</Link>
          </div>
          <div className="text-gray-400">
            <Link href="/daily-report/loser-gainer">Gain | Losse</Link>{" "}
          </div>
          <div className="text-gray-400">
            {" "}
            <Link href="/daily-report/flls-dlls">FIIs | DIIs Traded</Link>
          </div>
          {/* <div className="text-gray-400">
            {" "}
            <Link href="/daily-report"></Link>
          </div> */}
        </div>
      </div>
      {children}
    </>
  );
}

export default Navbar;
