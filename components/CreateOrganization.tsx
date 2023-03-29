import { useState } from "react"
import { Database } from "../utils/supabase"
import { useSessionContext, useSupabaseClient } from "@supabase/auth-helpers-react"
import { v4 as uuidv4 } from 'uuid'
type Organizations = Database['public']['Tables']['organizations']['Row']

export default function CreateOrganization() {
  const supabase = useSupabaseClient()
  const { session } = useSessionContext()
  const organization_id = uuidv4()
  const user_organization_id = uuidv4()
  const [organization_name, setOrgName] = useState<Organizations['organization_name']>('')
  const [loading, setLoading] = useState<boolean>(false)
  const [invitations, setInvitations] = useState('')

  const createNewOrg = async (organization_name: Organizations['organization_name']) => {
    event?.preventDefault()
    if (!organization_name) {
      alert('Organization name is a required field')
      return
    }

    try {
      setLoading(true)
      if (!session) throw Error('No user')

      const orgUpdates = {
        organization_id,
        organization_name
      }
      const joinUpdates = {
        user_organization_id,
        organization_id,
        user_id: session?.user.id,
        user_organization_role: "admin"
      }

      const { data: orgUpdatesData, error: orgUpdatesError } = await supabase
        .from('organizations')
        .insert(orgUpdates)

      const { data: joinUpdatesData, error: joinUpdatesError } = await supabase
        .from('join_profiles_organizations')
        .insert(joinUpdates)

      if (orgUpdatesError || joinUpdatesError) throw Error
      alert('Organization created!')
    } catch (error) {
      alert('Error creating the organization!')
      console.log("Organization creation error:", error)
    } finally {
      setLoading(false)
    }
  }
  
  return (
    <>
      {session && <div>
        <h2>
            Create New Organization
        </h2>
        <form>
          <label htmlFor="org-name">Org Name: </label>
          <input id="org-name" type="text" value={organization_name} placeholder="Enter organization name..." onChange={(event) => setOrgName(event.target.value)} />
          <button onClick={() => {createNewOrg(organization_name)}}>{loading ? "Loading ..." : "Submit"}</button>
        </form>
        <form>
          <label htmlFor="invite-members">Invite members: </label>
          <input id="invite-members" type="text" value={invitations} placeholder="jane@org.com, john@org.com, ..." onChange={(event) => setInvitations(event.target.value)} />
        </form>
      </div>}
    </>
  )
}