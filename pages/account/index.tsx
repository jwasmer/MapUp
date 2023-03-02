import { useState } from "react"
import UserOrgs from "@/components/Organizations"
import Account from "@/components/Account"
import Events from "@/components/Events"
import { useSessionContext } from "@supabase/auth-helpers-react"

export default function Settings() {
  const { session } = useSessionContext()
  
  return (
    <div>
      {session && <Account session={session}/>}
    </div>
  )
}