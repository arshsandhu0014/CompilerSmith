import { ReactNode } from "react";
import Navbar from "../components/nav/Navbar";
import Image from "next/image";
import backgroundImage from "../../public/bgimg.png";

interface LayoutPropsType {
  children: ReactNode;
}

export default function Layout({ children }: LayoutPropsType) {
  return (
    <div>
      <Image
        layout="fill"
        src={backgroundImage}
        alt="background_image"
        objectFit="cover"
        quality={100}
      />
      <div className="relative z-1">
        <Navbar />
        <main>{children}</main>
      </div>
    </div>
  );
}
