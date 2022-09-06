import type { NextPage } from "next";
import React from "react";
import LandingInfo from "../components/landing-page/LandingInfo";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>CompilerSmith</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <LandingInfo />
    </div>
  );
};

export default Home;
