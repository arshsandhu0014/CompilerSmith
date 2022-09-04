import { NextPage } from "next";
import Navbar from "../components/nav/Navbar";
import BackgroundImage from "../ui/BackgroundImage";

const AboutPage: NextPage = () => {
  return (
    <div>
      <BackgroundImage />
      <Navbar />
    </div>
  );
};
export default AboutPage;
