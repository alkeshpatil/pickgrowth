import React from "react";

export default function Input({ extraclass , placeholder}) {
  return (
    <input
    placeholder={placeholder}
      className={
        "text-white p-3 pr-5 pl-5 m-2  font-medium rounded-md bg-gray-700 outline-none " +
        extraclass
      }
    />
  );
}
