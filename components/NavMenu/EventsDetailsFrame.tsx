import styles from "@/styles/EventsDetailsFrame.module.css";

export default function EventsDetailsFrame() {
  return (
    <div className={styles.EventsDetailFrameWrapper}>
      <p>
        Events
      </p>
    </div>
  )
}

/*
The Events frame will have two tabs:
  1. Create New Event
    a. Location
    b. Price
    c. Description
    d. Organization/subteam
    e. Date/duration
    f. Images? Media?
    g. RSVP requested?
  2. View Existing Event
    a. Clicking on an event will automatically populate the details into this frame
    b. An event should contain all the details listed when creating an event
*/