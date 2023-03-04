import { useState, useEffect } from "react"
import { useSupabaseClient, useSessionContext } from '@supabase/auth-helpers-react'
import { Database } from "@/utils/supabase"
import { OrgData } from "@/utils/interface"
import styles from "@/styles/Organizations.module.css"

export default function DisplayUserOrgs() {
  const supabase = useSupabaseClient<Database>()
  const { session } = useSessionContext()
  const [loading, setLoading] = useState(true)
  const [orgData, setOrgData] = useState<OrgData[] | null>(null)
  const [orgCards, setOrgCards] = useState<JSX.Element[] | null>([])

  useEffect(() => {
    if (session) {
      getUserOrgs()
      const orgUpdates = supabase.channel('org_updates');

      supabase
        .channel('org_updates')
        .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'join_users_organizations', filter: `user_id=eq.${session.user.id}`}, () => {
          getUserOrgs()
        })
        .on('postgres_changes', { event: 'UPDATE', schema: 'public', table: 'join_users_organizations', filter: `user_id=eq.${session.user.id}`}, () => {
          getUserOrgs()
        })
        .on('postgres_changes', { event: 'DELETE', schema: 'public', table: 'join_users_organizations', filter: `user_id=eq.${session.user.id}`}, () => {
          getUserOrgs()
        })
        .subscribe()
      
      return () => {supabase.removeChannel(orgUpdates)}
    }
  }, [session])

  useEffect(() => {
    if (orgData) {
      const buildOrgCards = (orgData: OrgData[]) => {
        return orgData.map((org) => {
          return <div className={styles.org} key={org.organization_id}>{org.organizations.organization_name}</div>
        })
      }

      setOrgCards(buildOrgCards(orgData))
    }
  }, [orgData])

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
        setOrgData(data as OrgData[])
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
      <div className={styles.orgsWrapper}>      
        {orgCards ? orgCards : <p>loading org cards</p>}
      </div>
    </>
  )
}