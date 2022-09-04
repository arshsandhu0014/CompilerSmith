import React from "react";
import { BsArrowReturnRight } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import logo from "../../../public/logo.png";
import NextImage from "next/image";

export default function LandingPreface() {
  return (
    <div className="flex flex-col justify-center items-center gap-8 w-96 ">
      <h1 className="font-bold text-4xl text-neutral-100 flex flex-row gap-2 items-center">
        <NextImage src={logo} height={45} width={45} />
        <p>CompilerSmith</p>
      </h1>
      <h2 className="text-center text-2xl text-neutral-100/70">
        The best compiler and editor to provide an easy to use and simple IDE
      </h2>
      <button className="bg-white text-black px-6 py-3 rounded-3xl active:scale-95 shadow-xl flex flex-row gap-1 items-center">
        Let's write Code
        <IoIosArrowForward fontSize={18} />
      </button>
    </div>
  );
}
