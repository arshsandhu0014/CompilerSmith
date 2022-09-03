import type { NextPage } from "next";
import React from "react";

const Home: NextPage = () => {
  const [textAreaState, setTextAreaState] = React.useState<string>("");
  return (
    <div>
      <div className=" flex flex-row justify-center align-center">
        <h1 className="text-rose-500 font-bold">
          Hello there, Welcome to Next.js
        </h1>
      </div>
      <div className="flex flex-row justify-center mt-10">
        <textarea
          onChange={(e) => {
            console.log(e.target.value);
            setTextAreaState(e.target.value);
          }}
          className="h-44 w-80 bg-neutral-300 caret-black focus:outline-none focus:border-none"
        />
      </div>

      <button
        onClick={() => {
          const reg = new RegExp("//g");
          console.log(textAreaState);
          console.log(JSON.stringify(JSON.stringify(textAreaState)));
        }}
        className="px-8 py-8 bg-rose-500 active:scale-95"
      >
        get formatted code
      </button>
    </div>
  );
};

export default Home;
