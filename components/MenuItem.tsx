import { MenuItemProps } from "@/utils/interface"
import styles from "../styles/MenuItem.module.css"

export default function MenuItem(props: MenuItemProps) {
  
  return (
    <li className={styles.menuItem}>
      {props.iconLeft}
      {props.children}
      {props.iconRight}
    </li>
  )
}