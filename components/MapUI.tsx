import styles from "../styles/MapUI.module.css"
import DownChevronIcon from "./icons/DownChevronIcon"
import Searchbar from "./Searchbar"
import Dropdown from "./Dropdown"
import Menu from "./Menu"
import MenuItem from "./MenuItem"
import SettingsIcon from "./icons/SettingsIcon"

export default function MapUI() {

  return (
    <header className={styles.nav}>
      <Searchbar />
      <menu className={styles.menuWrapper}>
        <Dropdown icon={<DownChevronIcon color={"#FFFFFF"} />}>
          <Menu>
            <MenuItem icon={<SettingsIcon color="#000000" />} />
            <MenuItem icon={<SettingsIcon color="#000000" />} />
            <MenuItem icon={<SettingsIcon color="#000000" />} />
          </Menu>
        </Dropdown>
      </menu>
    </header>
  )
}