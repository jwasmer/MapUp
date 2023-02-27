import Searchbar from "./Searchbar"
import styles from "../styles/MapUI.module.css"
import Dropdown from "./Dropdown"

export default function MapUI() {


  return (
    <header className={styles.nav}>
      <form className={styles.form}>
        <Searchbar />
        <Dropdown />
      </form>
    </header>
  )
}