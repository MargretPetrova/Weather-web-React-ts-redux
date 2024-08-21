import { FC } from "react";
import styles from "./Main.module.css";
import { useSelector } from "react-redux";
import {
  hasError,
  getLoadingState,
  getWeatherData,
} from "../../states/selectors";
import SearchBar from "../../components/SearchBar/SearchBar";
import Result from "./components/Result/Result";
import Hero from "./components/HeroComponent/HeroComponent";

interface MainProps {}

const Main: FC<MainProps> = () => {
  const loading = useSelector(getLoadingState);
  const hasErrorData = useSelector(hasError);
  const hasWeatherData = useSelector(getWeatherData);
  console.log(hasWeatherData);
  return (
    <div className={styles.main}>
      <Hero>
        <SearchBar />
        </Hero>
        <Result />
    </div>
  );
};

export default Main;
