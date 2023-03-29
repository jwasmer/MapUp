import { useState } from "react";
import { SearchbarProps } from "@/utils/interface";
import styles from "../styles/Searchbar.module.css";

export default function Searchbar(props: SearchbarProps) {
  const [searchTerm, setSearchTerm] = useState<string>("");

  return (
    <form
      onSubmit={(event) => {
        props.runSearch(event, searchTerm);
      }}
    >
      <input
        className={styles.search}
        type="text"
        value={searchTerm}
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
