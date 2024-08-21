import { FC } from "react";
import styles from "./WeatherCard.module.css";
import { useSelector } from "react-redux";
import {
  getWeatherCurrent,
  getWeatherForecastDays,
  getWeatherLocation,
} from "../../../states/selectors";
import WeeklyDaysItem from "./components/WeeklyDaysItem/WeeklyDaysItem";
import wetIcon from "../../../assets/images/wet.png";
import windIcon from "../../../assets/images/wind.png";
import { weatherDateFormater } from "../../../helpers/weatherDate";
import WeeklyCard from "./components/AdditionalInfoCards/AdditionalInfoCards";
import AdditionalInfoCards from "./components/AdditionalInfoCards/AdditionalInfoCards";

interface WeatherCardProps {
  //todo
}
const WeatherCard: FC<WeatherCardProps> = () => {
  const location = useSelector(getWeatherLocation);
  const current = useSelector(getWeatherCurrent);
  const forecastForDays = useSelector(getWeatherForecastDays);
  const weekDay = location
    ? weatherDateFormater.formatCurrentDay(location.localtime)
    : "";
  const currentTime = location
    ? weatherDateFormater.formatCurrentHour(location.localtime)
    : "";

  return (

    <div className={styles["today forecast"]}>
      <div className={styles["current-card-body"]}>
        <div
          className={styles["current-icon"]}
          style={{
            background: `url(${current?.condition.icon}) no-repeat center`,
          }}
        ></div>
        <div className={styles["current-info"]}>
          <div className={styles["weather-date-location"]}>
            <p className={styles["text-grey"]}>
              {weekDay}, {currentTime}
            </p>

            <h1 className={styles["text-grey"]}>{location && location.name}</h1>
          </div>
          <div className="weather-data d-flex">
            <div className={styles["mr-auto text-white"]}>
              <h4 className={styles["text-white"]}>
                {current && current.temp_c}
                <span className="symbol">&deg;</span>C
              </h4>
              <p className={styles["text-grey"]}>{current && current.condition.text}</p>
            </div>
          </div>
          <div className={styles["additional-info-bar"]}>
            <AdditionalInfoCards
              inputClass="humidity"
              text={`${current?.humidity}%`}
              icon={wetIcon}
            ></AdditionalInfoCards>
            <AdditionalInfoCards
              inputClass="wind"
              text={`${current?.wind_kph}kph`}
              icon={windIcon}
            ></AdditionalInfoCards>
          </div>
        </div>
      </div>
      <div className={styles["card-body-days"]}>
        <div className={styles["weekly-days"]}>
          {forecastForDays &&
            forecastForDays.map((day) => (
              <WeeklyDaysItem date={day.date} day={day.day}></WeeklyDaysItem>
            ))}
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
