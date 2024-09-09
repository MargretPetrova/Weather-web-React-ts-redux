import React from "react";
import styles from "./NavList.module.css";

interface NavListProps {
  classDiv: string;
  labels: string[];
}

const NavList: React.FC<NavListProps> = ({ classDiv, labels }) => {
  return (
    <ul className={styles[`${classDiv}`]}>
      {labels.map((label) => (
        <li className={styles["menu-item"]}>
          <a href="#">{label}</a>
        </li>
      ))}
    </ul>
  );
};

export default NavList;
