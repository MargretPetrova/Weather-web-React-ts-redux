import { ReactNode } from "react";
import styles from "./Container.module.css";

type ContainerProps = {
  children: ReactNode;
};

const Container = (props: ContainerProps) => {
  return <div className={styles["container"]}>{props.children}</div>;
};

export default Container;
