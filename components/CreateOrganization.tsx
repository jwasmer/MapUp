import { useState } from "react"

export default function CreateOrganization() {
  const [orgName, setOrgName] = useState('')
  const [invitations, setInvitations] = useState('')
  
  return (
    <div>
      <h2>
          Create New Organization
      </h2>
      <label htmlFor="org-name">Org Name: </label>
      <input id="org-name" type="text" value={orgName} placeholder="Enter organization name..." onChange={(event) => setOrgName(event.target.value)} />
      <label htmlFor="invite-members">Invite members: </label>
      <input id="invite-members" type="text" value={invitations} placeholder="jane@org.com, john@org.com, ..." onChange={(event) => setInvitations(event.target.value)} />

    </div>
  )
}