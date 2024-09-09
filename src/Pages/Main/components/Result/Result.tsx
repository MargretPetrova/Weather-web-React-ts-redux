import { FC } from "react";
import WeatherCard from "../../../../components/Common/WeatherCard/WeatherCard";
import styles from "../Result/Result.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getWeatherLocation } from "../../../../states/selectors";
import Container from "../../../../components/Common/Container/Container";
import { getWeather } from "../../../../states/actions/weatherActions";

interface ResultProps {}

const Result: FC<ResultProps> = () => {
  const dispatch = useDispatch<any>();
  const location = useSelector(getWeatherLocation);
  const storedLocation = localStorage.getItem("weatherData");
  if(!location && storedLocation != null) {
    dispatch(getWeather(storedLocation));
  }
  return (
    <div className={styles["forecast-table"]}>
      <Container>
        <div className={`${styles["forecast-container"]}`}>
          {location && <WeatherCard />}
        </div>
      </Container>
    </div>
  );
};

export default Result;
