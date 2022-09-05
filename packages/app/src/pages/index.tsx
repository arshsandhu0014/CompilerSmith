import type { NextPage } from "next";
import React from "react";
import Navbar from "../components/nav/Navbar";
import Image from "next/image";
import coderLottieAnimation from "../../public/coder_lottie.json";
import LandingInfo from "../components/landing-page/LandingInfo";
import BackgroundImage from "../ui/BackgroundImage";
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
