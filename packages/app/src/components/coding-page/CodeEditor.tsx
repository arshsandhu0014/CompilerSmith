import React from "react";
import { FaPlay } from "react-icons/fa";
import CodeArea from "./CodeArea";

interface LanguageSelectorPropType {
  langSelected: string;
  setLangSelected: Function;
}

function LanguageSelector({ setLangSelected }: LanguageSelectorPropType) {
  const changeLanguage = (e: any) => {
    setLangSelected(e.target.value);
  };
  return <div></div>;
}

export default function CodeEditor() {
  const [codeState, setCodeState] = React.useState<string>("");
  const [langSelected, setLangSelected] = React.useState<string>("c");

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
              newfile.{langSelected}
            </div>
          </div>
          <div
            aria-label="run and compile buttons"
            className="flex flex-row items-center"
          >
            <button
              onClick={() => {
                console.log("overall output");
                console.log(codeState);
                console.log(JSON.stringify(JSON.stringify(codeState)));
              }}
              className="font-medium underline flex flex-row gap-1 items-center text-neutral-100 active:scale-90 "
            >
              <FaPlay />
              Run
            </button>
            <div className="h-5 w-0 border-l ml-3 mr-3 bg-neutral-300" />
            <button className="font-medium underline flex flex-row gap-1 items-center text-neutral-100 active:scale-90 ">
              {"</>"} Compile
            </button>
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
