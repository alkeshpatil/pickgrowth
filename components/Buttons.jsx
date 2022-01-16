import Image from "next/image";

function Buttons({ onclick, children , text, color, imgUrl }) {
  return (
    <button
      onClick={onclick}
      className={
        "text-white active:text-slate-900 active:bg-[#00FF75] this form to get started [BUTTON] transition ease-in-out duration-1000 p-3 pr-5 pl-5 mr-2 shadow-[0_35px_60px_-15px_rgba(0,0,0,0)] font-medium rounded-md " +
        color
      }
    >
      {children}
      {imgUrl}
      {text}
    </button>
  );
}

export default Buttons;
