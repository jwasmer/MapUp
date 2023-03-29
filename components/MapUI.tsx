import { MouseEventHandler, useState } from "react";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import styles from "../styles/MapUI.module.css";
import Link from "next/link";
import Icon from "./Icon";
import Menu from "./Menu";
import Searchbar from "./Searchbar";
import MapButton from "./MapButton";
import MenuItem from "./MenuItem";
import { Database } from "@/utils/supabase";
type OrganizationRow = Database["public"]["Tables"]["organizations"]["Row"];
type Result = Pick<OrganizationRow, "organization_id" | "organization_name">;

export default function MapUI() {
  const supabase = useSupabaseClient<Database>();
  const [results, setResults] = useState<Result[]>([]);
  const [loading, setLoading] = useState(false);

  async function searchAddresses(event: HTMLFormElement, searchTerm: string) {
    event?.preventDefault();
    try {
      setLoading(true);
      setLoading(() => true);

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

  return (
    <header className={styles.nav}>
      <Searchbar runSearch={searchAddresses} />
      <MapButton icon={<Icon name={"arrow_drop_down"} />}>
        <Menu>
          <Link href="/account">
            <MenuItem iconLeft={<Icon color={"#FFFFFF"} name={"settings"} />}>
              Account
            </MenuItem>
          </Link>
          <Link href="/organizations">
            <MenuItem iconLeft={<Icon color={"#FFFFFF"} name={"settings"} />}>
              Organizations
            </MenuItem>
          </Link>
          <button className={styles.signOut} onClick={(event) => {
              event.preventDefault
              console.log('click')
              supabase.auth.signOut()
            }}>
            <MenuItem iconLeft={<Icon color={"#FFFFFF"} name={"settings"}/>}>
              Sign Out
            </MenuItem>
          </button>
        </Menu>
      </MapButton>
    </header>
  );
}
