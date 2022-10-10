import React, { useEffect, useState } from "react";
import { useField } from "formik";
import classNames from "classnames";

const Input = ({ label, type = "text", ...props }) => {
  const [field, meta, helpers] = useField(props);

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
        {...field}
        {...props}
        type={inputType}
        className={classNames({
          "bg-zinc-50 px-2 border w-full h-[38px] rounded-sm outline-none focus:border-gray-400 text-xs": true,
          "valid:pt-[10px]": field.value,
        })}
      />
      <small
        className={classNames({
          "absolute left-[9px] -translate-y-1/2 cursor-text text-gray-400 pointer-events-none transition-all": true,
          "text-xs top-1/2": !field.value,
          "text-[10px] top-0 pt-[2px] translate-y-0": field.value,
        })}
      >
        {label}
      </small>
      {type === "password" && field.value && (
        <div
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
