import React from "react";
import Lottie from "react-lottie-player";
import animationData from "../../../public/coder_lottie.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const LottieCoderAnimation = () => {
  return (
    <div className="h-128 w-128 ">
      <Lottie
        loop
        animationData={animationData}
        play
        className="h-full w-full"
      />
    </div>
  );
};
export default LottieCoderAnimation;
