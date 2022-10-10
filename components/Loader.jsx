import React from "react";
import { FaInstagram } from "react-icons/fa";

const Loader = () => {
  return (
    <p className="text-3xl font-bold w-full h-full fixed bg-zinc-50 text-pink-700 flex flex-col items-center justify-center">
      <FaInstagram size={100} />
      <h1 className="text-4xl">Instagram</h1>
    </p>
  );
};

export default Loader;
