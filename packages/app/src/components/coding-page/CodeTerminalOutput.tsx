import { useAtom } from "jotai";
import React, { useEffect } from "react";
import { ImSpinner2 } from "react-icons/im";
import {
  consoleOutputAtom,
  loadingConsoleOutputAtom,
} from "../../context/store";

export default function CodeTerminalOutput() {
  const [loadingConsoleOutput, setLoadingConsoleOutput] = useAtom(
    loadingConsoleOutputAtom
  );
  const [consoleOutputState, setConsoleOutputState] =
    useAtom(consoleOutputAtom);

  useEffect(() => {
    if (loadingConsoleOutput === true) {
      setConsoleOutputState("");
    }
  }, [loadingConsoleOutput]);

  const cleanedOutput = (data: any): string => {
    if (data.success === true) {
      return data.output;
    } else if (data.error == true) {
      return data.error_type + "\n" + data.err;
    } else if (data === "") {
      return "";
    } else return JSON.stringify(data);
  };

  return (
    <div className="bg-white bg-opacity-10 backdrop-blur-md drop-shadow-lg rounded-xl py-6 px-6 ">
      <div className="flex flex-row items-center gap-2">
        <h1 className="text-neutral-300 text-lg">Output</h1>
        {loadingConsoleOutput && (
          <ImSpinner2 className="text-neutral-300 animate-spin" fontSize={13} />
        )}
      </div>
      <div className="h-0 border-t w-full border-t-neutral-300 mb-2" />
      <textarea
        value={cleanedOutput(consoleOutputState)}
        disabled
        className="h-52 w-full bg-neutral-100 bg-opacity-10 rounded-lg focus:outline-none text-neutral-200 resize-none px-2 py-1"
      />
    </div>
  );
}
