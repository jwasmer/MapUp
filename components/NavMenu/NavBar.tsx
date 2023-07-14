import { useState } from "react";
import styles from "@/styles/NavBar.module.css";
import NavButton from "../NavMenu/NavButton";
import Icon from "../Icon";
import { ActiveMenu, NavBarProps } from "@/utils/interface";
import MapDetailsFrame from "./MapDetailsFrame";

export default function NavMenu() {
  const [activeMenu, setActiveMenu] = useState<ActiveMenu>(null);
  const [detailsFrameToggle, setDetailsFrameToggle] = useState(false);

  function toggleDetailsFrame() {
    if (activeMenu) setDetailsFrameToggle((toggleState) => !toggleState);
  }

  return (
    <div className={styles.navBarWrapper}>
      <div className={styles.navBar}>
        <NavButton
          setDetailsFrameToggle={setDetailsFrameToggle}
          setActiveMenu={setActiveMenu}
          activeMenu={activeMenu}
          menuItemName={"Map"}
          iconName={"map"}
        />
        <NavButton
          setDetailsFrameToggle={setDetailsFrameToggle}
          setActiveMenu={setActiveMenu}
          activeMenu={activeMenu}
          menuItemName={"Events"}
          iconName={"local_activity"}
        />
        <NavButton
          setDetailsFrameToggle={setDetailsFrameToggle}
          setActiveMenu={setActiveMenu}
          activeMenu={activeMenu}
          menuItemName={"Teams"}
          iconName={"groups"}
        />
        <NavButton
          setDetailsFrameToggle={setDetailsFrameToggle}
          setActiveMenu={setActiveMenu}
          activeMenu={activeMenu}
          menuItemName={"Account"}
          iconName={"manage_accounts"}
        />
      </div>
      <div
        className={`${styles.detailsFrame} ${
          activeMenu && detailsFrameToggle ? styles.expanded : styles.collapsed
        }`}
      >
        {activeMenu === "Map" && <MapDetailsFrame />}
      </div>
      <button
        className={`${styles.expandCollapseBtn} ${
          detailsFrameToggle ? styles.expanded : styles.collapsed
        } ${activeMenu ? styles.revealed : styles.hidden}`}
        onClick={toggleDetailsFrame}
      >
        {detailsFrameToggle ? (
          <Icon color={"var(--icon-inactive)"} name={"arrow_left"} />
        ) : (
          <Icon color={"var(--icon-inactive)"} name={"arrow_right"} />
        )}
      </button>
    </div>
  );
}
