import Image from "next/image";
import websiteBackgroundImg from "../../public/bgimg.png";

const BackgroundImage = () => {
  return (
    <div className="absolute inset-0 -z-50">
      <Image
        src={websiteBackgroundImg}
        alt="Background image"
        quality={100}
        layout="fill"
      />
    </div>
  );
};
export default BackgroundImage;
