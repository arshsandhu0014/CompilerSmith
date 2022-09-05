import React from "react";
import { FaPlay } from "react-icons/fa";
import CodeArea from "./CodeArea";
import { IoIosArrowDown } from "react-icons/io";
import { useAtom } from "jotai";
import {
  consoleOutputAtom,
  customInputAtom,
  loadingConsoleOutputAtom,
} from "../../context/store";
import axios from "axios";
export default function CodeEditor() {
  const [codeState, setCodeState] = React.useState<string>("");
  const [langSelected, setLangSelected] = React.useState<string>("c");
  const [customInputState, _] = useAtom(customInputAtom);
  const [loadingConsoleOutput, setLoadingConsoleOutput] = useAtom(
    loadingConsoleOutputAtom
  );

  const [consoleOutputState, setConsoleOutputState] =
    useAtom(consoleOutputAtom);

  const compileAndRunCode = async () => {
    const codeData = {
      lang: langSelected,
      code_body: codeState,
      code_input: customInputState,
    };
    console.log(codeData);

    //const res = await axios("http://localhost:8080/");
    setLoadingConsoleOutput(true);
    try {
      const res = await axios.post("http://localhost:8080/code", codeData);
      console.log(res);
      setConsoleOutputState(res.data);
    } catch (err) {
      console.error(err);
      setConsoleOutputState((err as any).response.data);
    }
    setLoadingConsoleOutput(false);
  };

  return (
    <div className="flex-1 mt-20 w-140 h-140">
      <div className="flex flex-row justify-between mb-2">
        <h1 className="font-medium text-neutral-100 text-2xl ">Editor</h1>
        <LanguageSelector
          setLangSelected={setLangSelected}
          langSelected={langSelected}
        />
      </div>
      <div className="bg-white bg-opacity-10 backdrop-blur-md drop-shadow-lg rounded-xl h-full w-full px-8 py-3">
        <div
          aria-label="New file and run and compiler... the header section of the editor"
          className="flex flex-row justify-between"
        >
          <div arial-label="file names" className="my-2 flex flex-row gap-2">
            <div className="rounded-tl-xl rounded-br-xl border px-4 py-2    text-neutral-100">
              file.{langSelected}
            </div>
          </div>
          <div
            aria-label="run and compile buttons"
            className="flex flex-row items-center"
          >
            <button
              onClick={compileAndRunCode}
              className="font-medium underline flex flex-row gap-1 items-center text-neutral-100 active:scale-90 "
            >
              <FaPlay />
              Run
            </button>
            {/**
               * 
            <div className="h-5 w-0 border-l ml-3 mr-3 bg-neutral-300" />
            <button className="font-medium underline flex flex-row gap-1 items-center text-neutral-100 active:scale-90 ">
              {"</>"} Compile
            </button>
               * 
               */}
          </div>
        </div>
        <div className="h-0 w-full border-t border-t-neutral-200" />
        {/** code landing */}
        <CodeArea
          langSelected={langSelected}
          codeState={codeState}
          setCodeState={setCodeState}
        />
      </div>
    </div>
  );
}

interface LanguageSelectorPropType {
  langSelected: string;
  setLangSelected: Function;
}

function LanguageSelector({
  langSelected,
  setLangSelected,
}: LanguageSelectorPropType) {
  const [dropDownOpen, setDropDownOpen] = React.useState<boolean>(false);
  const changeLanguage = (e: any) => {
    setLangSelected(e.target.value);
  };
  const changeDropDownVisibility = () => {
    setDropDownOpen(!dropDownOpen);
  };
  return (
    <div className="relative">
      <button
        onClick={changeDropDownVisibility}
        className="pl-4 pr-2 mr-2 py-1 flex flex-row gap-2 justify-center items-center   text-neutral-100 font-medium  bg-neutral-50 bg-opacity-30 rounded-lg"
      >
        {langSelected === "cpp" && <p className="text-base">C++</p>}
        {langSelected === "c" && <p className="text-base">C</p>}
        {langSelected === "py" && <p className="text-base">Python</p>}
        <IoIosArrowDown fontSize={15} className="mt-1" />
      </button>

      <div
        aria-label="dropdown menu"
        className={`absolute z-10 bg-neutral-500 bg-opacity-90 rounded-lg flex flex-col
        ${dropDownOpen === true ? "block" : "hidden"} 
        `}
      >
        <button
          onClick={() => {
            setLangSelected("c");
            setDropDownOpen(false);
          }}
          className="px-4 py-1 hover:bg-black hover:bg-opacity-20 text-neutral-50"
        >
          C
        </button>
        <button
          onClick={() => {
            setLangSelected("cpp");
            setDropDownOpen(false);
          }}
          className="px-4 py-1 hover:bg-black hover:bg-opacity-20 text-neutral-50"
        >
          C++
        </button>
        <button
          onClick={() => {
            setLangSelected("py");
            setDropDownOpen(false);
          }}
          className="px-4 py-1 hover:bg-black hover:bg-opacity-20 text-neutral-50"
        >
          Python
        </button>
      </div>
    </div>
  );
}
