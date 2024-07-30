import { FC } from "react";
import WeatherCard from "../../components/Common/WeatherCard/WeatherCard";
import SearchBar from "../../components/SearchBar/SearchBar";
import styles from "../Result/Result.module.css";
import { useSelector } from "react-redux";
import { getWeatherLocation } from "../../states/selectors";

interface ResultProps {}

const Result: FC<ResultProps> = () => {
  const location = useSelector(getWeatherLocation);
  return (
    <div className={`${styles["result-container"]}`}>
      <div className={styles["padding-container"]}>
        <div className="row container d-flex justify-content-center ">
         {location && <WeatherCard />}
        </div>
      </div>
    </div>
  );
};

export default Result;
