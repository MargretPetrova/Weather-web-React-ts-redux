import { FC } from "react";
import WeatherCard from "../../../../components/Common/WeatherCard/WeatherCard";
import styles from "../Result/Result.module.css";
import { useSelector } from "react-redux";
import { getWeatherLocation } from "../../../../states/selectors";
import Container from "../../../../components/Common/Container/Container";

interface ResultProps {}

const Result: FC<ResultProps> = () => {
  const location = useSelector(getWeatherLocation);
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
