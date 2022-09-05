import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import CodeConsole from "../components/coding-page/CodeConsole";
import CodeEditor from "../components/coding-page/CodeEditor";
import Navbar from "../components/nav/Navbar";
import BackgroundImage from "../ui/BackgroundImage";

const CodingPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Code</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="mt-12 max-w-6xl ml-auto mr-auto flex flex-row gap-5 ">
        <CodeEditor />
        <CodeConsole />
      </div>
    </div>
  );
};
export default CodingPage;
