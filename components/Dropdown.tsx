import SettingsIcon from "./icons/SettingsIcon"
import styles from "../styles/Dropdown.module.css"

export default function Dropdown() {
  return (
    <li className={styles.dropdown}>
      <button className={styles.button}>
        <SettingsIcon color={"#FFFFFF"} />
      </button>
    </li>
  )
}