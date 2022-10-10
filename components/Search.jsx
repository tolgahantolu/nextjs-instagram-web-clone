import React, { useState } from "react";
import classNames from "classnames";
import { IoSearch } from "react-icons/io5";
import { AiFillCloseCircle } from "react-icons/ai";

const Search = () => {
  const [focus, setFocus] = useState(false);

  return (
    <div className="w-[268px] relative group">
      <span
        className={classNames({
          "absolute top-0 left-0 w-9 h-9 flex justify-center items-center text-[#8e8e8e] pointer-events-none": true,
          //prettier-ignore
          "hidden": focus,
        })}
      >
        <IoSearch size={16} />
      </span>
      <input
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        type="text"
        placeholder="Search"
        className="bg-gray-200 pl-9 pb-[2px] outline-none h-9 rounded w-full focus:pl-3"
      />
      <button
        onClick={() => setFocus(false)}
        className={classNames({
          "absolute top-0 right-0 w-9 h-9 hidden justify-center items-center text-[#948e8e] cursor-pointer": true,
          //prettier-ignore
          "!flex": focus,
        })}
      >
        <AiFillCloseCircle size={16} />
      </button>
    </div>
  );
};

export default Search;
