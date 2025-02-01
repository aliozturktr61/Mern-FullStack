import React from "react";

const Button = ({ onClick ,title}) => {
  return (
    <div
      onClick={onClick} // onClick eventini burada ekledik
      className="w-full bg-indigo-600 border border-indigo-600 p-2 rounded-md text-center text-white cursor-pointer hover:bg-indigo-800 hover:font-bold"
    >
      {title}
    </div>
  );
};

export default Button;