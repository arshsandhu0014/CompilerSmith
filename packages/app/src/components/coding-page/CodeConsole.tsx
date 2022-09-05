import React from "react";
import CodeInput from "./CodeInput";
import CodeTerminalOutput from "./CodeTerminalOutput";

export default function CodeConsole() {
  return (
    <div className="flex-1 mt-20 flex flex-col ">
      <h1 className="font-medium text-2xl text-neutral-100 mb-2">Console</h1>
      <div className="h-full flex flex-col gap-4">
        <CodeInput />
        <CodeTerminalOutput />
      </div>
    </div>
  );
}
