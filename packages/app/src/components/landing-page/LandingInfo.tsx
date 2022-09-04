import LandingPreface from "./LandingPreface";
import LottieCoderAnimation from "./LottieCoderAnimation";

export default function LandingInfo() {
  return (
    <div className="max-w-4xl ml-auto mr-auto mt-28 flex flex-row ">
      <LottieCoderAnimation />
      <LandingPreface />
    </div>
  );
}
