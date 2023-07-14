import styles from "@/styles/ToggleButton.module.css";
import { useState } from "react";
import { ToggleButtonProps } from "@/utils/interface";

export default function ToggleButton(props: ToggleButtonProps) {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const toggleChecked = () => {
    setIsChecked((currentState) => !currentState);
  };

  return (
    <div
      onClick={() => toggleChecked()}
      style={{ color: isChecked ? props.colorTrue : props.colorFalse }}
      className={styles.icon}
    >
      {isChecked ? props.iconTrue : props.iconFalse}
    </div>
  );
}
