import styles from "../styles/MapUI.module.css"
import DownChevronIcon from "./icons/DownChevronIcon"
import Searchbar from "./Searchbar"
import Dropdown from "./Dropdown"

export default function MapUI() {

  return (
    <header className={styles.nav}>
      <Searchbar />
      <menu className={styles.menuWrapper}>
        <Dropdown 
          icon={<DownChevronIcon color={"#FFFFFF"} />}
        />
      </menu>
    </header>
  )
}