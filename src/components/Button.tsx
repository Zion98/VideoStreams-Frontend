import React from "react";

const Button: React.FC<{ title: string;disabled?:boolean; }> = ({ title,disabled }) => {
  return (
    <>
      <button type="submit" disabled={disabled} className="inline-block hover:bg-white hover:text-black w-full mt-4 font-extralight px-8 py-2 text-center text-white bg-[#fc4747] rounded-md">
        {title}
      </button>
    </>
  );
};

export default Button;
