import React, { useCallback, useState } from "react";
// import { useFormState } from "react-hook-form";
import InputField from "../Common/Input/InputField";
import styles from "./SearchBar.module.css";
import { getWeather, setError } from "../../states/actions/weatherActions";
import { useDispatch, useSelector } from "react-redux";
import { debounce } from "lodash";
import { getWeatherSuggestions } from "../../states/selectors";
import { getSuggestions } from "../../states/actions/suggestionsActions";
import Container from "../Common/Container/Container";
import { createMinValidator } from "../../helpers/Validators/minValidator";

interface SearchBarProps {}

const SearchBar: React.FC<SearchBarProps> = () => {
  const dispatch = useDispatch<any>();

  const [city, setCity] = useState("");
  const [isFormDirty, setIsFormDirty] = useState(false);


  const allSuggestions = useSelector(getWeatherSuggestions);

  const handleInputChange = useCallback(
    debounce(async (city: string) => {
      await dispatch(getSuggestions(city));
    }, 1000),
    [dispatch]
  );

  const handleChange = (e: { target: { value: string; type: string } }) => {
    setIsFormDirty(true)
    setCity(e.target.value);
    handleInputChange(e.target.value);
  };

  const onSubmitHandler = (e: any) => {
    e.preventDefault();
    if (city.trim() === "" && city.length < 3) {
      dispatch(setError({ message: "Please select a valid location" }));
    } else {
      dispatch(getWeather(city));
      handleInputChange.cancel();
    }
  };

  const minValidator = createMinValidator(city, isFormDirty);

  return (
    <Container>
    <form
      onSubmit={onSubmitHandler}
      className={`form-group ${styles["search-form"]}`}
    >
      <div className={styles["search-bar"]}>
        <div className={styles["search-div-left"]}>
          <InputField
            onChange={handleChange}
            type="text"
            value={city}
            placeholder="Enter a city..."
            list="list-suggestions" 
            errorMsg={!minValidator.valid ? minValidator.message : ''}
          />
          {allSuggestions && allSuggestions.length > 0 && (
            <datalist
              id="list-suggestions"
              className={styles["data-list"]}
              style={{ width: "100" }}
            >
              {allSuggestions.map((curr) => (
                <option>
                  {curr.name}, {curr.country}
                </option>
              ))}
            </datalist>
          )}
        </div>
        <button name="Search" type="submit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
          </svg>
        </button>
      </div>
    </form>
    </Container>
    
  );
};

export default SearchBar;
