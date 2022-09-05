import { ReactNode } from "react";
import Navbar from "../components/nav/Navbar";
import Image from "next/image";
import backgroundImage from "../../public/bgimg.png";
import styles from "../styles/styles.module.css";
interface LayoutPropsType {
  children: ReactNode;
}

export default function Layout({ children }: LayoutPropsType) {
  return (
    <div className={styles.background}>
      <Navbar />
      <main>{children}</main>
    </div>
  );
}
