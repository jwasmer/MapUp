import Icon from "@/components/Icon";
import { useState } from "react";
import {
  useSessionContext,
  useSupabaseClient,
} from "@supabase/auth-helpers-react";
import { Database } from "@/utils/supabase";
import styles from "@/styles/OrgCard.module.css";
import { OrgData } from "@/utils/interface";

export default function OrgCard(props: OrgData) {
  const [loading, setLoading] = useState(false);
  const supabase = useSupabaseClient<Database>();
  const { session } = useSessionContext();

  async function deleteOrg(id: string) {
    try {
      setLoading(true);
      if (!session) throw new Error("No user");

      let { error, status } = await supabase.rpc("delete_organization", {
        org_id: id,
        auth_id: session.user.id,
      });

      if (error && status !== 406) {
        throw Error;
      }
    } catch (error) {
      alert("Error deleting organization!");
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div key={props.organization_id} className={styles.org}>
      <h3 className={styles.title}>{props.organizations.organization_name}</h3>
      <button
        className={styles.deleteButton}
        onClick={() => {
          deleteOrg(props.organization_id);
        }}
      >
        <Icon name={"delete"} />
      </button>
    </div>
  );
}
