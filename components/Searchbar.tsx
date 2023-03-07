import { ChangeEvent, ChangeEventHandler } from "react"
import styles from "../styles/Searchbar.module.css"

export default function Searchbar({ searchTerm }: { searchTerm: string }, { setSearchTerm }: { setSearchTerm: React.Dispatch<React.SetStateAction<string>> }) {

  const handleSearchTextChange: ChangeEventHandler<HTMLInputElement> = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    setSearchTerm(event.target.value)
  }

  return (
    <form>
      <input 
        className={styles.search} 
        type="text" 
        value={searchTerm} 
        onChange={(event) => {handleSearchTextChange(event)}} 
      />
      <button type="submit">
        Submit
      </button>
    </form>
  )
}