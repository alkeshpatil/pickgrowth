function Navbar() {
  return (
    <>
    {/* bg-gradient-to-t to-[#161616] from-transparent */}
      <div className="font-body fixed w-screen  flex justify-between items-center text-cyan-50 h-28 ">
        <div className=" font-extrabold font-logo z-10  text-4xl w-1/3 h-full flex justify-center items-center">
          pick growth
        </div>
        <div className=" w-1/2 h-full flex justify-evenly  items-center">
          <div className="text-gray-400">Search</div>
          <div className="text-gray-400">Products</div>
          <div className="text-gray-400">About us</div>
          <div className="text-gray-400">servise</div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
