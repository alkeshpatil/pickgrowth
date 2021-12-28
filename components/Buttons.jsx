import Image from "next/image";

function Buttons({ onclick, text, color, imgUrl }) {
  return (
    <button
      onClick={onclick}
      className={
        "text-white p-3 pr-5 pl-5 m-2  font-medium rounded-md " +
        color
      }
    >
      {imgUrl}
      {text}
    </button>
  );
}

export default Buttons;
