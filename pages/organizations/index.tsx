import { useState, useEffect } from "react"
import { useUser, useSupabaseClient, Session } from '@supabase/auth-helpers-react'
import { Database } from '../../utils/supabase'
import styles from "../../styles/Organizations.module.css"
import CreateOrganization from "../../components/CreateOrganization"
type Organizations = Database['organizations']

export default function Organizations() {
  const [search, setSearch] = useState('')

  return (
    <div className="">      
      <h2>
        Your Organizations
      </h2>
      <h4>Turing</h4>
      <h4>Norwich University</h4>
      <h4>Board Game Enthusiasts of Vermont</h4>
      <label htmlFor="search-orgs">Search Organizations</label>
      <input id="search-orgs" type="text" value={search} placeholder="Search for organizations..." onChange={(event) => setSearch(event.target.value)} />
      <CreateOrganization />
    </div>
  )
}