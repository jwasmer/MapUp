import styles from "@/styles/TeamsDetailsFrame.module.css";

export default function TeamsDetailsFrame() {
  return (
    <div className={styles.TeamsDetailFrameWrapper}>
      <p>
        Teams
      </p>
    </div>
  )
}

/* 
The Teams frame will show the different teams a user belongs to and allow them to modify their membership.
  1. Show teams a user belongs to
  2. Search for new teams (both a search bar and a box to input an invite code)
  3. Leave teams
  4. Teams should expand to contain a blurb about the team as well as info regarding any subteams the users has joined specifically (joining a class year or a major for a university, etc)
  5. Teams admin features
    --This toolkit is going to be its own beast. This is a down-the-road project ATM.
    a. Invite/approve members
    b. Remove members
    c. Grant members privileges (create events, approve members, remove members, change team page, etc)
    d. Any potential data suite stuff. This will almost certainly be its own page and not a sidebar thing, but I'm keeping it here to maintain a record.
*/