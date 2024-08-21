import React from "react";
import List from "../../../Common/WeatherCard/components/WeeklyDaysItem/WeeklyDaysItem";
import styles from "./NavList.module.css";

interface NavListProps {
  classDiv?: string;
}

const NavList: React.FC<NavListProps> = ({ classDiv }) => {
  return (
    <ul className={styles[`${classDiv}`]}>
      <li className={styles["menu-item"]}>
        <a href="#">News</a>
      </li>
      <li className={styles["menu-item"]}>
        <a href="#">Live cameras</a>
      </li>
      <li className={styles["menu-item"]}>
        <a href="#">Photos</a>
      </li>
      <li className={styles["menu-item"]}>
        <a href="#">Contact</a>
      </li>
    </ul>
  );
};

export default NavList;
