import { useState } from "react"
import styles from "../styles/Dropdown.module.css"
import { DropdownProps } from "@/utils/interface"

export default function Dropdown(props: DropdownProps) {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <li className={styles.dropdown}>
      <button className={styles.button}>
        {props.icon}
        {open && <Menu />}
      </button>
    </li>
  )
}