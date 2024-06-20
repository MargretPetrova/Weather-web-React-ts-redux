import React, { ChangeEvent } from "react";
import styles from "./InputField.module.css";

interface InputProps {
  value?: string;
  type?: "text" | "textarea" | "password" | "checkbox";
  placeholder?: string;
  inputClass?: string;
  id?: string;
  list?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

const InputField: React.FC<InputProps> = ({type, value, placeholder, inputClass, onChange, list, id}) => {
  // const [value, setValue] = React.useState("");
  // const handleChange = (e: { target: { value: string } }) => {
  //   setValue(e.target.value);
  // };
  return (
    <input
      // className={styles[`${inputClass}`]}
      className={inputClass}
      type={type}
      value={value}
      onChange={onChange}
      list={list}
      id={id}
      placeholder={placeholder}
    />
  );
};

export default InputField;
