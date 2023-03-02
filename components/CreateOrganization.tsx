import { useEffect, useState } from "react"
import { Database } from "../utils/supabase"
import { useSessionContext, useSupabaseClient } from "@supabase/auth-helpers-react"
type Organizations = Database['organizations']

export default function CreateOrganization() {
  const supabase = useSupabaseClient()
  const { session } = useSessionContext()
  const [organization_id, setOrgId] = useState<Organizations['organization_id']>(null)
  const [organization_name, setOrgName] = useState<Organizations['organization_name']>('')
  const [loading, setLoading] = useState<boolean>(false)
  const [invitations, setInvitations] = useState('')

  const createNewOrg = async ({organization_name}: {organization_name: Organizations['organization_name']}) => {
    if (!organization_name) {
      alert('Organization name is a required field')
      return
    }

    try {
      setLoading(true)
      if (!session!.user) throw Error('No user')

      const orgUpdates = {organization_name}
      const joinUsersOrgsUpdates = {
        organization_id,
        user_id: session?.user.id,
        user_organization_role: "admin"
      }

      let { error } = await supabase.from('organizations').insert(orgUpdates)
      if (error) throw error
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
          <button onClick={() => {}}>Submit new org</button>
        </form>
        <form>
          <label htmlFor="invite-members">Invite members: </label>
          <input id="invite-members" type="text" value={invitations} placeholder="jane@org.com, john@org.com, ..." onChange={(event) => setInvitations(event.target.value)} />
        </form>
      </div>}
    </>
  )
}