import { useState } from "react"
import SettingsIcon from "./icons/SettingsIcon"
import styles from "../styles/Dropdown.module.css"
import { DropdownProps } from "@/utils/interface"

export default function Dropdown(props: DropdownProps) {
  const [showDropdown, setShowDropdown] = useState<boolean>(false)

  console.log("Props in Dropdown:", props)

  return (
    <li className={styles.dropdown}>
      <button className={styles.button} onClick={() => setShowDropdown((prevState) => {return !prevState})}>
        { showDropdown ? props.openIcon : props.closedIcon }
      </button>
    </li>
  )
}