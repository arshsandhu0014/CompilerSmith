import React from "react";

export default function CodeTerminalOutput() {
  return (
    <div className="flex-1 bg-white bg-opacity-10 backdrop-blur-md drop-shadow-lg rounded-xl py-6 px-6">
      <div>
        <h1 className="text-neutral-300 text-lg">Output</h1>
      </div>
      <div className="h-0 border-t w-full border-t-neutral-300 mb-2" />
      <textarea
        disabled
        className="h-52 w-full bg-neutral-100 bg-opacity-10 rounded-lg focus:outline-none text-neutral-200 resize-none"
      />
    </div>
  );
}
