import { ReactNode } from "react";
import styles from "./HeroComponent.module.css";

type HeroProps = {
  children: ReactNode;
};

const Hero = (props: HeroProps) => {
  return <div className={styles["hero"]}>{props.children}</div>;
};

export default Hero;
