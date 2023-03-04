import { useState, useEffect } from "react"
import { useSupabaseClient, useSessionContext } from '@supabase/auth-helpers-react'
import { Database } from "@/utils/supabase"
import { OrgData } from "@/utils/interface"
import DisplayUserOrgs from "@/components/DisplayUserOrganizations"
import CreateOrganization from "@/components/CreateOrganization"
type Organizations = Database['organizations']

export default function Organizations() {
  const supabase = useSupabaseClient<Database>()
  const { session } = useSessionContext()
  const [loading, setLoading] = useState(true)
  const [orgData, setOrgData] = useState<OrgsData[] | null>(null)
  const [search, setSearch] = useState<string>('')

  useEffect(() => {
    console.log(session)
    if (session) getUserOrgs()
  }, [session])

  async function getUserOrgs() {
    try {
      setLoading(true)
      if (!session) throw new Error('No user')
      
      let { data, error, status } = await supabase
        .from('join_users_organizations')
        .select()
        .eq('user_id', session.user.id)
        .select(`organization_id, user_organization_role, 
        organizations (
          organization_name
        )`)

      console.log(data)

      if (data) {
        setOrgData(data as OrgsData[])
      }

      if (error && status !== 406) {
        console.log("Error fetching from join_users_organizations table")
        throw Error
      }

    } catch (error) {
      alert ('Error loading organizations data!')
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {session && <div className="">      
        <h2>
          Your Organizations
        </h2>
        <DisplayUserOrgs />
        <form>
          <label htmlFor="search-orgs">Search Organizations</label>
          <input id="search-orgs" type="text" value={search} placeholder="Search for organizations..." onChange={(event) => setSearch(event.target.value)} />
        </form>
        <CreateOrganization />
      </div>}
    </>
  )
}