import React from "react";

const Seperator = ({ label = "OR" }) => {
  return (
    <div className="flex items-center my-2 mb-3">
      <div className="h-px bg-gray-300 flex-1" />
      <span className="px-4 font-semibold text-gray-500 text-[13px]">
        {label}
      </span>
      <div className="h-px bg-gray-300 flex-1" />
    </div>
  );
};

export default Seperator;
