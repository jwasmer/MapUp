import { useSupabaseClient } from "@supabase/auth-helpers-react"
import { useState } from "react"
import Searchbar from "./Searchbar"
import { Database } from "@/utils/supabase"

export default function SearchOrgs() {
  const supabase = useSupabaseClient<Database>()
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const [results, setResults] = useState({})

  async function searchOrgNames() {
    try {
      setLoading(true)

      if (!searchTerm) return

      let { data, error, status } = await supabase
        .from("organizations")
        .select()
        .textSearch("organization_name", `${searchTerm}`)

      if (data) setResults(data)

      if (error && status !== 406) {
        console.log("Error searching names data")
        throw Error
      }
    } catch (error) {
      alert("Error searching names data!")
      console.log(error)
    } finally {
      setLoading(false)
    }
    
  } 

    const searchProps = { setSearchTerm, searchTerm }
  
  return (
    <Searchbar
      {... searchProps}
    />
  )
}