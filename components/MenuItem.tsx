import { MenuItemProps } from "@/utils/interface"

export default function MenuItem(props: MenuItemProps) {
  
  return (
    <li>
      <button>
        {props.icon}
      </button>
    </li>
  )
}