import { NextPage } from "next";
import React from "react";
import CodeConsole from "../components/coding-page/CodeConsole";
import CodeEditor from "../components/coding-page/CodeEditor";
import Navbar from "../components/nav/Navbar";
import BackgroundImage from "../ui/BackgroundImage";

const CodingPage: NextPage = () => {
  return (
    <div>
      <div className="mt-12 max-w-6xl ml-auto mr-auto flex flex-row gap-5 ">
        <CodeEditor />
        <CodeConsole />
      </div>
    </div>
  );
};
export default CodingPage;
