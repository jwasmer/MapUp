import styles from "../styles/MapUI.module.css"
import DownChevronIcon from "./icons/DownArrowIcon"
import Searchbar from "./Searchbar"
import Dropdown from "./Dropdown"
import MenuItem from "./MenuItem"
import SettingsIcon from "./icons/SettingsIcon"

export default function MapUI() {

  return (
    <header className={styles.nav}>
      <Searchbar />
      <menu className={styles.menuWrapper}>
        <Dropdown icon={<DownChevronIcon />}>
          <MenuItem 
            iconLeft={<SettingsIcon />}> 
            Map Settings 
          </MenuItem>
          <MenuItem 
            iconLeft={<SettingsIcon />}> 
            Account 
          </MenuItem>
          <MenuItem 
            iconLeft={<SettingsIcon />} 
            iconRight={<SettingsIcon />}> 
            Organizations 
          </MenuItem>
        </Dropdown>
      </menu>
    </header>
  )
}