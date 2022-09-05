import type { NextPage } from "next";
import React from "react";
import Navbar from "../components/nav/Navbar";
import Image from "next/image";
import coderLottieAnimation from "../../public/coder_lottie.json";
import LandingInfo from "../components/landing-page/LandingInfo";
import BackgroundImage from "../ui/BackgroundImage";

const Home: NextPage = () => {
  return (
    <div>
      <LandingInfo />
    </div>
  );
};

export default Home;
