import React from "react";

const Button = ({ children, type = "button", ...props }) => {
  return (
    <button
      {...props}
      type={type}
      className="mt-2 h-[30px] rounded bg-brand font-semibold text-white text-sm disabled:opacity-50 flex justify-center items-center gap-x-2 w-full"
    >
      {children}
    </button>
  );
};

export default Button;
