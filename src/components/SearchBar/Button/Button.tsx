import React from "react";
import styles from "./Button.module.css"

interface ButtonProps {
  name?: string;
  type?: "button" | "submit";
}
const Button: React.FC<ButtonProps> = ({name, type}) => <button type={type} className={styles["btn btn-info"]}>{name}</button>;

export default Button;