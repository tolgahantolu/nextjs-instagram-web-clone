import React, { useEffect, useState } from "react";

const Input = ({ label, type = "text", ...props }) => {
  const [show, setShow] = useState(false);
  const [inputType, setInputType] = useState(type);

  useEffect(() => {
    if (show) {
      setInputType("text");
    } else if (type === "password") {
      setInputType("password");
    } else {
    }
  }, [show]);

  return (
    <label className="block relative">
      <input
        {...props}
        type={inputType}
        required
        className="bg-zinc-50 px-2 border w-full h-[38px] rounded-sm outline-none focus:border-gray-400 text-xs valid:pt-[10px] peer"
      />
      <small className="absolute top-1/2 left-[9px] -translate-y-1/2 text-xs cursor-text text-gray-400 pointer-events-none transition-all peer-valid:text-[10px] peer-valid:top-0 peer-valid:pt-[2px] peer-valid:translate-y-0">
        {label}
      </small>
      {type === "password" && props?.value && (
        <div
          type="button"
          className="cursor-pointer absolute top-0 right-2 h-full flex items-center font-semibold text-sm select-none"
          onClick={() => setShow(!show)}
        >
          {show ? "Hide" : "Show"}
        </div>
      )}
    </label>
  );
};

export default Input;
