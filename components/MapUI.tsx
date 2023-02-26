import { useState, ChangeEvent, ChangeEventHandler } from "react"
import styles from "../styles/MapUI.module.css"

export default function MapUI() {
  const [searchText, setSearchText] = useState<string>('')

  const handleSearchTextChange: ChangeEventHandler<HTMLInputElement> = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    setSearchText(event.target.value)
  }

  return (
    <header>
      <form>
        <input className={styles.search} type="text" value={searchText} onChange={() => {handleSearchTextChange}}></input>
      </form>
    </header>
  )
}