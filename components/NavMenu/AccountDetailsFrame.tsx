import styles from "@/styles/AccountDetailsFrame.module.css";

export default function AccountDetailsFrame() {
  return (
    <div className={styles.AccountDetailsFrameWrapper}>
      <p>
        Account
      </p>
    </div>
  )
}

/*
The Account frame allows a user to modify their own account.
  1. Address data
  2. Profile picture?
  3. Bio?
  4. Privacy settings (is their name attached to their isochrone? is their profile picture visible to members of some teams but not others? contact info?)
  5. Other links (LinkedIn, GitHub, etc)
  6. User can specify travel distance and method
  7. User can specify how they want to be notified of new events (SMS, email, etc)
  8. User can 
*/