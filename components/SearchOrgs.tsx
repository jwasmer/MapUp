import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useState } from "react";
import Searchbar from "./Searchbar";
import { Database } from "@/utils/supabase";
import Icon from "@/components/Icon";
import styles from "@/styles/SearchOrgs.module.css";
import { SearchResult } from "@/utils/interface";

export default function SearchOrgs() {
  const supabase = useSupabaseClient<Database>();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [results, setResults] = useState<SearchResult[]>([]);

  async function searchOrgNames(searchTerm: string) {
    event?.preventDefault(); // always try to pass through specific event argument. otherwise this defaults to the window event, and the window event is just the last event that happened in the window. This might be what you want, but it might not be. If you're using this, pass event through. Also, consider building this into a reusable component. It doesn't really need to live here, it should live in the form.
    try {
      setLoading(true);

      if (!searchTerm) return;

      let { data, error, status } = await supabase
        .from("organizations")
        .select("organization_id, organization_name")
        .textSearch("organization_name", `${searchTerm}`);

      if (data) {
        setResults(data);
        console.log(data);
      }

      if (error && status !== 406) {
        console.log("Error searching names data");
        throw Error;
      }
    } catch (error) {
      alert("Error searching names data!");
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  console.log(results);

  function searchResultCards(results: SearchResult[]) {
    console.log(results);
    return results.map((result) => {
      return (
        <div key={result.organization_id}>
          <h3 className={styles.searchCard}>{result.organization_name}</h3>
          <Icon name={"add"} />
        </div>
      );
    });
  }

  return (
    <div>
      <h3>Join new organizations</h3>
      <Searchbar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        runSearch={searchOrgNames}
      />
      {results && searchResultCards(results)}
    </div>
  );
}
