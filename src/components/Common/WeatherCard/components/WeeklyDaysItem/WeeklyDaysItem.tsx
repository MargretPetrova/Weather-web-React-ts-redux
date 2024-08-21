import React from "react";
import { Condition } from "../../../../../states/types";
import { weatherDateFormater } from "../../../../../helpers/weatherDate";
import styles from "./WeeklyDaysItem.module.css";

interface WeeklyDaysItemProp {
  date?: string;
  day?: {
    avghumidity?: number;
    avgtemp_c?: number;
    condition?: Condition;
    maxtemp_c?: number;
    mintemp_c?: number;
  };
}

const WeeklyDaysItem: React.FC<WeeklyDaysItemProp> = ({ date, day }) => {
  date = date ? weatherDateFormater.formatDaysDate(date) : "";
  return (
    <div className={styles["weakly-weather-item"]}>
      <p className={styles["text-grey"]}>{date}</p>
      <img src={day?.condition?.icon}></img>
      <p>
        {day?.maxtemp_c}&deg;C
      </p>
    </div>
  );
};

export default WeeklyDaysItem;
