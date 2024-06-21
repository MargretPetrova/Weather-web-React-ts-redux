import { FC } from "react";
import WeatherCard from "../../components/Common/WeatherCard/WeatherCard";
import { useSelector } from "react-redux";
import { hasError, getLoadingState } from "../../states/selectors";
import SearchBar from "../../components/SearchBar/SearchBar";
import styles from "../Result/Result.module.css";

interface ResultProps {}

const Result: FC<ResultProps> = () => {
  const loading = useSelector(getLoadingState);
  const isError = useSelector(hasError);

  return (
    <div className={`${styles["result-container"]}`}>
      <div className={styles["padding-container"]}>
        <div className="row container d-flex justify-content-center ">
          {loading && <h2>Loading...</h2>}
          {!loading && !isError && <WeatherCard />}
          {isError && <h2>error</h2>}
        </div>
      </div>
    </div>
  );
};

export default Result;
