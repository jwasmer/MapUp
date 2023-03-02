import { useState, useEffect } from "react"
import { useUser, useSupabaseClient, Session, useSessionContext } from '@supabase/auth-helpers-react'
import { Database } from '../../utils/supabase'
import styles from "../../styles/Organizations.module.css"
import CreateOrganization from "../../components/CreateOrganization"
type Organizations = Database['organizations']
type JoinOrgsUsers = Database['join_users_organizations']

export default function Organizations() {
  const supabase = useSupabaseClient<Database>()
  const { session } = useSessionContext()
  const [loading, setLoading] = useState(true)
  const [user_organization_role, setUserOrgRole] = useState<JoinOrgsUsers['user_organization_role']>(null)
  const [organization_id, setOrgId] = useState<Organizations['organization_id']>(null)
  const [organization_name, setOrgnName] = useState<Organizations['organization_id']>(null)
  const [search, setSearch] = useState<string>('')

  useEffect(() => {
    if (session) getUserOrgs()
    console.log(session?.user.id)
  }, [session])

  async function getUserOrgs() {
    try {
      setLoading(true)
      if (!session) throw new Error('No user')
      
      let { data, error, status } = await supabase
        .from('join_users_organizations')
        .select('organization_id, user_id, user_organization_role')
        .eq('user_id', session.user.id)
        .maybeSingle()

      if (error && status !== 406) {
        throw error
      }

      if (!data) {
        console.log(data)
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
        <form>
          <label htmlFor="search-orgs">Search Organizations</label>
          <input id="search-orgs" type="text" value={search} placeholder="Search for organizations..." onChange={(event) => setSearch(event.target.value)} />
        </form>
        <CreateOrganization />
      </div>}
    </>
  )
}