import { useState } from "react"
import { DropdownProps } from "@/utils/interface"
import styles from "../styles/Dropdown.module.css"

export default function Dropdown(props: DropdownProps) {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <ul>
      <button className={styles.button} onClick={() => {
        setOpen((prevState => !prevState))
      }}>
        {props.icon}
      </button>
      {open && 
        <menu className={styles.menuWrapper}>
          {props.children}
        </menu>
      }
    </ul>
  )
}