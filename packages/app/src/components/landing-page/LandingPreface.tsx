import React from "react";
import { BsArrowReturnRight } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import logo from "../../../public/logo.png";
import NextImage from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

export default function LandingPreface() {
  const router = useRouter();
  return (
    <div className="flex flex-col justify-center items-center gap-8 w-96 ">
      <motion.div initial="hidden" animate="visible" variants={logoanimVariant}>
        <h1 className="font-bold text-4xl text-neutral-100 flex flex-row gap-2 items-center">
          <NextImage src={logo} height={45} width={45} />
          <p>CompilerSmith</p>
        </h1>
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={taglineanimVariant}
      >
        <h2 className="text-center text-2xl text-neutral-100/70">
          The best compiler and editor to provide an easy to use and simple IDE
        </h2>
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={buttonanimVariant}
      >
        <button
          onClick={() => {
            router.push("/code");
          }}
          className="bg-white text-black px-6 py-3 rounded-3xl active:scale-95 shadow-xl flex flex-row gap-1 items-center font-base"
        >
          I write Code
          <IoIosArrowForward fontSize={18} />
        </button>
      </motion.div>
    </div>
  );
}

const logoanimVariant = {
  hidden: {
    opacity: 0,
    translateX: 200,
  },
  visible: {
    opacity: 1,
    translateX: 0,
    transition: {
      duration: 0.5,
    },
  },
};
const taglineanimVariant = {
  hidden: {
    opacity: 1,
    translateX: 200,
  },
  visible: {
    opacity: 1,
    translateX: 0,
    transition: {
      duration: 0.8,
    },
  },
};

const buttonanimVariant = {
  hidden: {
    opacity: 0,
    translateX: 200,
  },
  visible: {
    opacity: 1,
    translateX: 0,
    transition: {
      duration: 1,
    },
  },
};
