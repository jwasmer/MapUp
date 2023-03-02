import styles from "../styles/MapUI.module.css"
import Link from "next/link"
import Icon from "./Icon"
import Menu from "./Menu"
import Searchbar from "./Searchbar"
import MapButton from "./MapButton"
import MenuItem from "./MenuItem"

export default function MapUI() {
  return (
    <header className={styles.nav}>
      <Searchbar />
      <MapButton icon={<Icon name={"arrow_drop_down"} />}>
        <Menu>
          <Link href="/account">
            <MenuItem iconLeft={<Icon color={"#FFFFFF"} name={"settings"} />}>
              Account
            </MenuItem>
          </Link>
          <MenuItem iconLeft={<Icon color={"#FFFFFF"} name={"settings"} />}>
            Organizations
          </MenuItem>
          <MenuItem iconLeft={<Icon color={"#FFFFFF"} name={"settings"} />}>
            Sign Out
          </MenuItem>
          <MenuItem iconLeft={<Icon color={"#FFFFFF"} name={"settings"} />}>
            Sign Out
          </MenuItem>
        </Menu>
      </MapButton>
    </header>
  );
}