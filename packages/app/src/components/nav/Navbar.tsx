import { useRouter } from "next/router";
import Link from "next/link";
import { useEffect } from "react";
import logo from "../../../public/logo.png";
import NextImage from "next/image";
import Lottie from "react-lottie-player";
import githubLottieAnimation from "../../../public/github_logo_lottie.json";

export default function Navbar() {
  const router = useRouter();
  useEffect(() => {
    console.log(router.pathname);
  });
  return (
    <div className="z-10 text-neutral-100 max-w-4xl ml-auto mr-auto mt-10">
      <div className="flex flex-row items-center justify-between">
        <div className="font-medium text-xl flex flex-row gap-2 items-center cursor-pointer">
          <NextImage src={logo} height={30} width={30} />
          <p>CompilerSmith</p>
        </div>

        <div className="flex flex-row items-center gap-8">
          <Link href="/" passHref>
            <button
              className={`${
                router.pathname === "/"
                  ? " bg-neutral-50 bg-opacity-20 rounded-lg px-2 py-2 backdrop-opacity-0 font-bold"
                  : ""
              }
              `}
            >
              Home
            </button>
          </Link>
          <Link href="/code" passHref>
            <button
              className={`${
                router.pathname === "/code"
                  ? " bg-neutral-50 bg-opacity-20 rounded-lg px-2 py-2 backdrop-opacity-0 font-bold"
                  : ""
              }
              `}
            >
              Compile
            </button>
          </Link>
          <Link href="/about" passHref>
            <button
              className={`${
                router.pathname === "/about"
                  ? " bg-neutral-50 bg-opacity-20 rounded-lg px-2 py-2 backdrop-opacity-0 font-bold"
                  : ""
              }
              `}
            >
              About Us
            </button>
          </Link>

          <button
            className="bg-rounded-3xl cursor-pointer"
            onClick={() => {
              window.location.assign(
                "https://github.com/ensorceler/compilersmith"
              );
            }}
          >
            <Lottie
              play
              loop
              animationData={githubLottieAnimation}
              className="h-14 w-14"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
// d4145a
