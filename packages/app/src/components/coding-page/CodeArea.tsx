import React from "react";
import ReactPrismEditor from "react-prism-editor";
import Editor from "@monaco-editor/react";

const cppCode = `
#include <iostream>
using namespace std;

int main() {
	// your code goes here
	return 0;
}
`;

const clangCode = `
#include <stdio.h>

int main() {
	// your code goes here

  return 0;
}
`;

const pyCode = `
print("Hello,World in Python")

`;
export default function CodeArea({
  langSelected,
  codeState,
  setCodeState,
}: {
  langSelected: string;
  codeState: string;
  setCodeState: Function;
}) {
  function handleEditorChange(value: any, event: any) {
    setCodeState(value);
  }

  return (
    <div
      aria-label="code editor holder "
      className="mt-4 border border-neutral-500"
    >
      {langSelected === "python" && (
        <Editor
          theme="vs-dark"
          className="h-128 rounded-md"
          defaultLanguage="python"
          value={pyCode}
          onChange={handleEditorChange}
        />
      )}
      {langSelected === "c" && (
        <Editor
          theme="vs-dark"
          className="h-128 rounded-md"
          defaultLanguage="c"
          value={clangCode}
          onChange={handleEditorChange}
        />
      )}
      {langSelected === "cpp" && (
        <Editor
          theme="vs-dark"
          className="h-128 rounded-md"
          defaultLanguage="cpp"
          value={cppCode}
          onChange={handleEditorChange}
        />
      )}
    </div>
  );
}
