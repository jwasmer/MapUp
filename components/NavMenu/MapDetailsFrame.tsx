import styles from "@/styles/MapDetailsFrame.module.css";
import Menu from "../Menu";
import ToggleButton from "../ToggleButton";
import Icon from "../Icon";

export default function MapDetailsFrame() {
  return (
    <div className={styles.mapDetailFrameWrapper}>
      <p className={styles.headerText}>Show events from these teams</p>
      <ul className={styles.teamListWrapper}>
        <li className={styles.teamListItem}>
          <div className={styles.maxWidth}>
            <ToggleButton
              iconTrue={<Icon name={"expand_less"} color={"inherit"} />}
              iconFalse={<Icon name={"expand_more"} color={"inherit"} />}
              colorTrue={"var(--icon-selected"}
              colorFalse={"var(--icon-inactive"}
            />
            <p>Norwich University</p>
          </div>
          <ToggleButton
            iconTrue={<Icon name={"visibility"} color={"inherit"} />}
            iconFalse={<Icon name={"visibility_off"} color={"inherit"} />}
            colorTrue={"var(--icon-selected"}
            colorFalse={"var(--icon-inactive"}
          />
        </li>
        <li className={styles.teamListItem}>
          <div className={styles.maxWidth}>
            <ToggleButton
              iconTrue={<Icon name={"expand_less"} color={"inherit"} />}
              iconFalse={<Icon name={"expand_more"} color={"inherit"} />}
              colorTrue={"var(--icon-selected"}
              colorFalse={"var(--icon-inactive"}
            />
            <p>Vermont Army National Guard</p>
          </div>
          <ToggleButton
            iconTrue={<Icon name={"visibility"} color={"inherit"} />}
            iconFalse={<Icon name={"visibility_off"} color={"inherit"} />}
            colorTrue={"var(--icon-selected"}
            colorFalse={"var(--icon-inactive"}
          />
        </li>
        <li className={styles.teamListItem}>
          <div className={styles.maxWidth}>
            <ToggleButton
              iconTrue={<Icon name={"expand_less"} color={"inherit"} />}
              iconFalse={<Icon name={"expand_more"} color={"inherit"} />}
              colorTrue={"var(--icon-selected"}
              colorFalse={"var(--icon-inactive"}
            />
            <p>Mudhead Sailing Association</p>
          </div>
          <ToggleButton
            iconTrue={<Icon name={"visibility"} color={"inherit"} />}
            iconFalse={<Icon name={"visibility_off"} color={"inherit"} />}
            colorTrue={"var(--icon-selected"}
            colorFalse={"var(--icon-inactive"}
          />
        </li>
      </ul>
    </div>
  );
}

/* 
This section of the menu will allow the user to:
  1. Filter the type of events they see on the map...
    a. by organization
    b. by event type (tags system?)
    c. by start/end date or duration
    d. Toggle whether public events (events hosted by an org but visible to all) are visible or not
  2. Color-code the results they see by organization
  3. Toggle view from isochrones to heat map?
*/
