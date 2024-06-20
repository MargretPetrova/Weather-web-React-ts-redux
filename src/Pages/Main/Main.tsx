import { FC } from "react";
import styles from "./Main.module.css";
import SearchBar from "../../components/SearchBar/SearchBar";

interface MainProps {}

const Main: FC<MainProps> = () => {
  return (
    <div className={styles.main}>
      <SearchBar />
    </div>
  );
};

export default Main;
