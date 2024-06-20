import { FC } from "react";
import styles from "../AdditionalInfoCards/AdditionalCardInfo.module.css"

interface AdditionalInfoCardsProps {
    inputClass?: string;
    text: string;
    icon: string;
}
const AdditionalInfoCards: FC<AdditionalInfoCardsProps> = ({inputClass, text, icon}) => {
  return (
    <div className={styles["add-info"]}>
      <img src={icon}/>
    <span>{text}</span>
    </div>
  );
};
export default AdditionalInfoCards;
