import Searchbar from "./Searchbar"
import styles from "../styles/MapUI.module.css"
import Dropdown from "./Dropdown"
import { DropdownProps } from "@/utils/interface"

export default function MapUI(props: DropdownProps) {

  console.log("Props in MapUI:", props)

  return (
    <header className={styles.nav}>
      <form className={styles.form}>
        {props.children}
      </form>
    </header>
  )
}