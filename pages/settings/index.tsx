import { useState } from "react"
import UserOrgs from "@/components/UserOrgs"
import Account from "@/components/Account"
import Events from "@/components/Events"
import { useSessionContext } from "@supabase/auth-helpers-react"

export default function Settings() {
  const [orgName, setOrgName] = useState('')
  const [invitations, setInvitations] = useState('')

  const { session } = useSessionContext()
  
  return (
    <div>
      {session && <Account session={session}/>}
      <UserOrgs />
      <h2>
        Create New Organization
      </h2>
      <label htmlFor="org-name">Org Name: </label>
      <input id="org-name" type="text" value={orgName} placeholder="Enter organization name..." onChange={(event) => setOrgName(event.target.value)} />
      <label htmlFor="invite-members">Invite members: </label>
      <input id="invite-members" type="text" value={invitations} placeholder="jane@org.com, john@org.com, ..." onChange={(event) => setInvitations(event.target.value)} />
      <Events />
    </div>
  )
}