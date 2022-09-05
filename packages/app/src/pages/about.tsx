import { NextPage } from "next";
import Head from "next/head";

const AboutPage: NextPage = () => {
  return (
    <div className="mt-20">
      <Head>
        <title>About Us</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="h-96 bg-neutral-100 backdrop-blur-md bg-opacity-10 rounded-xl ml-auto mr-auto max-w-2xl"></div>
    </div>
  );
};
export default AboutPage;
