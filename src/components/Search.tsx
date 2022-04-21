import React from "react";
import searchBar from "../assets/search.svg";
const Search: React.FC<{ placeholder: string }> = ({ placeholder }) => {
  return (
    <div className="relative mt-6 mb-4">
      <img
        src={searchBar}
        alt="search__icon"
        className="absolute top-1 left-1 w-5"
      />
      <input
        type="search"
        placeholder={placeholder}
        className="bg-[#10141e] font-light outline-0 text-white w-full h-full pl-8 pb-2 focus:border-b border-b-white"
      />
    </div>
  );
};

export default Search;
