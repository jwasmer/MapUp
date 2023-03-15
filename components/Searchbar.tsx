import { SearchbarProps } from "@/utils/interface"
import styles from "../styles/Searchbar.module.css"

export default function Searchbar(props: SearchbarProps) {
// move searchTerm state into Searchbar
  return (
    <form onSubmit={() => {
      props.runSearch(props.searchTerm)
    }}>
      <input 
        className={styles.search} 
        type="text" 
        value={props.searchTerm} 
        onChange={(event) => {props.setSearchTerm(event.target.value)}} 
      />
      <button type="submit" >
        Submit
      </button>
    </form>
  )
}