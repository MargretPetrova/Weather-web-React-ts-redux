import React from "react";
import List from "../../Common/WeeklyDaysItem/WeeklyDaysItem";
import styles from "./SuggestionList.module.css";

interface SuggestionsListProps {}

const SuggestionsList: React.FC<SuggestionsListProps> = () => (
  <div className={styles["suggestions-list"]}>
    <List />
  </div>
);

export default SuggestionsList;
