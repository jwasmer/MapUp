import { useState } from "react"
import { DropdownProps } from "@/utils/interface"
import Menu from "./Menu"
import MenuItem from "./MenuItem"
import SettingsIcon from "./icons/SettingsIcon"
import styles from "../styles/Dropdown.module.css"

export default function Dropdown(props: DropdownProps) {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <li className={styles.dropdown}>
      <button className={styles.button} onClick={() => {
        setOpen(true)
      }}>
        {props.icon}
      </button>
      {open && 
        <Menu>
          {props.children}
        </Menu>
      }
    </li>
  )
}