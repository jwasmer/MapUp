import styles from "@/styles/NavButton.module.css";
import Icon from "../Icon";
import { NavButtonProps } from "@/utils/interface";

export default function NavButton(props: NavButtonProps) {
  const selectMenu = () => {
    if (props.activeMenu === props.menuItemName) {
      props.setActiveMenu(null)
      props.setDetailsFrameToggle(false)
    } else {
      props.setActiveMenu(props.menuItemName)
      props.setDetailsFrameToggle(true)
    }
  };

  return (
    <button className={styles.navButton} onClick={() => selectMenu()}>
      <Icon
        color={
          props.activeMenu === props.menuItemName
            ? "var(--icon-selected)"
            : "var(--icon-inactive)"
        }
        name={props.iconName}
      />
      <div
        className={styles.buttonLabel}
        style={{
          color:
            props.activeMenu === props.menuItemName
              ? "var(--icon-selected)"
              : "var(--icon-inactive)",
        }}
      >
        {" "}
        {props.menuItemName}{" "}
      </div>
    </button>
  );
}

// Need to update this to include detailsFrameToggle conditional