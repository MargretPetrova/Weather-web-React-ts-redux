import React from "react";

import styles from "./FieldValidationMsg.module.css";

interface FieldValidationProps {
 classDiv:string;
 message?: string;
//  isInvalid?:boolean;
//  touched?:boolean;
}

const FieldValidation: React.FC<FieldValidationProps> = ({classDiv, message}) => {
  return message ? (
    <div className = {styles[`${classDiv}`]}>
 {message}
    </div>
  ) : null;
};

export default FieldValidation;
