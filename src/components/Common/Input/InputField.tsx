import React, { ChangeEvent, useState } from "react";
import styles from "./InputField.module.css";
import { ErrorType } from "../../../helpers/helperTypes";
import FieldValidation from "../FieldValidation/FieldValidationMsg";

interface InputProps {
  value?: string;
  type?: "text" | "textarea" | "password" | "checkbox";
  placeholder?: string;
  inputClass?: string;
  id?: string;
  list?: string;
  error?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  validators?: [ErrorType];
  errorMsg?:string
}

const InputField: React.FC<InputProps> = ({
  type,
  value,
  placeholder,
  inputClass,
  onChange,
  list,
  id,
  error,
  validators,
  errorMsg
}) => {
  const [validate, setvalidate] = useState<ErrorType>();

  validators &&
    validators.forEach((element: ErrorType) => {
      setvalidate(element);
    });
  return (
    <div>
      <input
        className={inputClass}
        type={type}
        value={value}
        onChange={onChange}
        list={list}
        id={id}
        placeholder={placeholder}
        required
      />
      <FieldValidation
      classDiv = 'error-msg'
      message={errorMsg}
      />
      {/* <span>{errorMsg}</span> */}
    </div>
  );
};

export default InputField;
